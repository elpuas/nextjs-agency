import PropTypes from 'prop-types'
import styles from './BlockZombieMovies.module.css'
/**
 * Handle the BlockZombieMovies block.
 *
 * @author WebDevStudios
 * @param {object} props            The props.
 * @param {object} props.attributes The attributes object.
 * @return {Element}                The component.
 */
export default function BlockZombieMovies({attributes}) {
  const results = attributes.zombieData.results
  return (
    <>
      <div className={`${styles.blockZombieMovies} zombie-block`}>
        {results
          ? results.map((movie) => {
              return (
                <div
                  id={movie?.id}
                  key={movie?.id}
                  className={styles.zombieCard}
                >
                  <div className={styles.zombieCardInner}>
                    <figure className={styles.zombieCardFront}>
                      {null !== movie.backdrop_path ? (
                        <img
                          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                          alt={movie.title}
                          width={500}
                          height={417}
                          className={styles.poster}
                        />
                      ) : (
                        <img
                          src="http://placekitten.com/1024/300"
                          alt="kittens"
                          width={500}
                          height={417}
                          className={styles.kitten}
                        />
                      )}
                    </figure>
                    <div className={styles.zombieCardBack}>
                      <h2 className={styles.zombieTitle}>{movie?.title}</h2>
                      <p>{`Year: ${movie?.release_date.substring(0, 4)}`}</p>
                      <p>
                        {movie?.overview.split(' ').splice(0, 50).join(' ')}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })
          : 'There was a problem with attributes in BlockZombieMovies.js.'}
      </div>
    </>
  )
}

BlockZombieMovies.propTypes = {
  attributes: PropTypes.object
}
