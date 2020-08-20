import PropTypes from 'prop-types'
import React from 'react'

import { Image as ImageProp } from 'polocas-napadu-core/proptypes'

function getImageSrc (image) {
  if (typeof image === 'string') {
    return image
  }
  return image.src
}

export function Image ({ component, bg, image, style, ...props }) {
  const src = getImageSrc(image)
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
