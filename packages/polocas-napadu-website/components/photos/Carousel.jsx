import React from 'react'
import ImageGallery from 'react-image-gallery'

export function Carousel ({ photos, ...props }) {
  return (
    <ImageGallery
      autoPlay
      infinite
      showFullscreenButton={false}
      showNav={false}
      showPlayButton={false}
      slideInterval={5000}
      showThumbnails={false}
      items={photos.map(photo => ({ original: photo.image }))}
    />
  )
}
