import PropTypes from 'prop-types'
import React from 'react'

import { Image as ImageProp } from 'polocas-napadu-core/proptypes'

function getImageSrc (image, size) {
  if (typeof image === 'string') {
    return image
  }
  if (image.thumbnails && size) {
    const thumbnail = image.thumbnails.find(thumb => thumb.name === size)
    if (thumbnail) {
      return thumbnail.webp
    }
  }
  return image.src
}

export function Image ({ component, bg, image, size, style, ...props }) {
  const src = getImageSrc(image, size)
  if (bg) {
    const Component = 'div' || component
    return (
      <Component
        style={{ ...style, backgroundImage: `url(${src})` }}
        {...props}
      />
    )
  }
  const Component = 'img' || component
  return <Component src={src} style={style} {...props} />
}

Image.propTypes = {
  image: ImageProp.isRequired,
  bg: PropTypes.bool
}
