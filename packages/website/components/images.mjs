import classnames from 'classnames'
import ImageGallery from 'react-image-gallery'
import React from 'react'
import PropTypes from 'prop-types'

import styles from './images.module.scss'

import { Image as ImageProp } from 'polocas-napadu-core/proptypes.mjs'

function getImageSrc(image, size) {
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

export function Image({ className, component, image, size, style, ...props }) {
  const src = getImageSrc(image, size)
  const Component = 'div' || component
  return (
    <Component
      className={classnames(className, styles.img)}
      style={{
        ...style,
        backgroundImage: `url(${src})`,
      }}
      {...props}
    />
  )
}

Image.propTypes = {
  image: ImageProp.isRequired,
  bg: PropTypes.bool,
}

export function Carousel({ className, photos, ...props }) {
  return (
    <ImageGallery
      additionalClass={classnames(styles.carousel, className)}
      autoPlay
      infinite
      showFullscreenButton={false}
      showNav={false}
      showPlayButton={false}
      slideInterval={5000}
      showThumbnails={false}
      items={photos.map(photo => ({ original: photo.image }))}
      {...props}
    />
  )
}

export function Gallery({ free, photos }) {
  return (
    <div className={classnames(styles.gallery, { [styles.freeGallery]: free })}>
      {photos.map(photo => (
        <div className={styles.photo} key={photo.id}>
          <Image image={photo.image} alt={photo.description} />
        </div>
      ))}
    </div>
  )
}

Gallery.propTypes = {
  free: PropTypes.bool,
}
