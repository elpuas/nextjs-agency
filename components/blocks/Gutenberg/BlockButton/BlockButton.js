import Button from '@/components/atoms/Button'
import PropTypes from 'prop-types'
import {useEffect, useState} from 'react'

/**
 * Button Block
 *
 * The core Button block from Gutenberg.
 *
 * @author WebDevStudios
 * @param {object} props            The component properties.
 * @param {string} props.anchor     Optional anchor/id.
 * @param {string} props.className  Optional classnames.
 * @param {string} props.linkTarget The target for the link.
 * @param {string} props.rel        The rel attribute for the link.
 * @param {string} props.text       The link label.
 * @param {string} props.url        The link for the button.
 * @return {Element} The Button component.
 */
export default function BlockButton({
  anchor,
  className,
  linkTarget,
  rel,
  text,
  url
}) {
  const [newUrl, setNewUrl] = useState()

  useEffect(() => {
    /**
     * Extract the Pathname from URL
     *
     * @param {string} url Link to Parse
     */
    function ParseURL() {
      const parser = document.createElement('a')
      parser.href = url
      setNewUrl(parser.pathname)
    }

    ParseURL()
  }, [])

  return (
    <Button
      className={className}
      text={text}
      url={newUrl}
      urlExternal={false}
      attributes={{
        id: anchor || null,
        target: linkTarget || null,
        rel: rel || null
      }}
    />
  )
}

BlockButton.propTypes = {
  anchor: PropTypes.string,
  className: PropTypes.string,
  linkTarget: PropTypes.string,
  rel: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string
}
