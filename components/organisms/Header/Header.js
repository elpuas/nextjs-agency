import Container from '@/components/atoms/Container'
import {useWordPressContext} from '@/components/common/WordPressProvider'
import AlgoliaSearch from '@/components/molecules/AlgoliaSearch'
import Navigation from '@/components/molecules/Navigation'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useRef, useState} from 'react'
import styles from './Header.module.css'

// TODO: Create Storybook for this component.

/**
 * Render the ImageGallery component.
 *
 * @author WebDevStudios
 * @return {Element} The Header component.
 */
export default function Header() {
  const prevScrollY = useRef(0)

  const [goingUp, setGoingUp] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false)
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true)
      }

      prevScrollY.current = currentScrollY
      console.log(goingUp, currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, {passive: true})

    return () => window.removeEventListener('scroll', handleScroll)
  }, [goingUp])

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
        className={cn(
          styles.header,
          'templateHeader',
          !goingUp ? styles.headerSticky : null
        )}
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
              <a className={cn(styles.logo, 'logoWrapper')}>
                <Image
                  src="/images/logo-light.png"
                  alt="ZombieLabs Logo"
                  width={154}
                  height={34}
                  className="logo-light"
                />
                <Image
                  src="/images/logo-black.png"
                  alt="ZombieLabs Logo"
                  width={154}
                  height={34}
                  className="logo-dark"
                />
              </a>
            </Link>
            <Navigation
              menu={menus?.primary_menu}
              styles={styles}
              className={styles.primaryMenu}
            />
            <button className="search-button" onClick={onSearchClick}>
              <span> 🧠 </span>Braiiins
            </button>
          </div>
        </Container>
      </header>
    </>
  )
}
