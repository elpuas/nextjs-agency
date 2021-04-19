import Container from '@/components/atoms/Container'
import {useWordPressContext} from '@/components/common/WordPressProvider'
import AlgoliaSearch from '@/components/molecules/AlgoliaSearch'
import Navigation from '@/components/molecules/Navigation'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import styles from './Header.module.css'

// TODO: Create Storybook for this component.

/**
 * Render the ImageGallery component.
 *
 * @author WebDevStudios
 * @return {Element} The Header component.
 */
export default function Header() {
  const {menus} = useWordPressContext()

  const [searchClass, setSearchClass] = useState(false)

  const onSearchClick = () => {
    setSearchClass(!searchClass)
  }

  return (
    <>
      <a className={styles.skip} href="#page-content">
        Skip to Main Content
      </a>
      <header
        className={styles.header}
        style={{backgroundImage: 'url(/images/bloody-header.png)'}}
      >
        <div
          className={cn(styles.search, searchClass ? styles.isVisible : null)}
        >
          <AlgoliaSearch
            className={styles.input}
            useHistory={true}
            usePlaceholder={true}
          />
        </div>
        <Container paddingTop={false} paddingBtm={false}>
          <div className={styles.navigation}>
            <Link href="/">
              <a className={styles.logo}>
                <Image
                  src="/images/logo.png"
                  alt="Zombie Logo"
                  width={300}
                  height={160}
                />
              </a>
            </Link>
            <Navigation
              menu={menus?.primary_menu}
              styles={styles}
              className={styles.primaryMenu}
            />
            <button onClick={onSearchClick}>Braiiins</button>
          </div>
        </Container>
      </header>
    </>
  )
}
