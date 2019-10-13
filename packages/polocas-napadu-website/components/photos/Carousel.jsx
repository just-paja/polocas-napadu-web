import classnames from 'classnames'
import ImageGallery from 'react-image-gallery'
import React from 'react'
import styles from './Carousel.scss'

export function Carousel ({ className, photos, ...props }) {
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
