import cn from 'classnames'
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
      <div className={cn(styles.blockZombieMovies)}>
        {results
          ? results.map((movie) => {
              return (
                <div id={movie?.id} key={movie?.id}>
                  <figure>
                    {null !== movie.backdrop_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                        alt={movie.title}
                        width={500}
                        height={160}
                        className="poster"
                      />
                    ) : null}
                  </figure>
                  <h2>{movie?.title}</h2>
                  <p>{`Year: ${movie?.release_date.substring(0, 4)}`}</p>
                  <p>{movie?.overview}</p>
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
