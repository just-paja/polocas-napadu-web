import classnames from 'classnames'
import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'

import { gql } from 'apollo-boost'
import { Image } from '../photos'
import { Photo } from 'polocas-napadu-core/proptypes'
import { withQuery, imageQuery } from '../graphql'

import styles from './BannerCarousel.module.scss'

const QUERY_SHOW_PHOTOS = gql`
  query {
    showPhotoList(limit: 10) {
      id
      image ${imageQuery}
      created
    }
  }
`

function getRandomPhoto (list, current) {
  const allowed = list.map(photo => photo.id).filter(photo => photo !== current)
  const number = Math.floor(Math.random() * allowed.length)
  return allowed[number]
}

export const BannerCarouselComponent = ({ className, data }) => {
  const list = data.showPhotoList
  const [backgroundPhoto, setBackgroundPhoto] = useState(list[0].id)
  useEffect(() => {
    const timeout = setTimeout(
      () => setBackgroundPhoto(getRandomPhoto(list, backgroundPhoto)),
      10000
    )
    return () => {
      clearTimeout(timeout)
    }
  }, [list, backgroundPhoto])
  return (
    <div className={classnames(styles.carousel, className)}>
      <div className={styles.inner}>
        {list.map((photo, index) => (
          <Image
            bg
            className={classnames(styles.photo, {
              [styles.visible]: photo.id === backgroundPhoto
            })}
            size='horizon'
            key={photo.id}
            onClick={() => setBackgroundPhoto(photo.id)}
            image={photo.image}
          />
        ))}
      </div>
    </div>
  )
}

BannerCarouselComponent.propTypes = {
  className: PropTypes.string,
  data: PropTypes.shape({
    showPhotoList: PropTypes.arrayOf(Photo).isRequired
  })
}

BannerCarouselComponent.displayName = 'BannerCarousel'

export const BannerCarousel = withQuery({
  query: QUERY_SHOW_PHOTOS
})(BannerCarouselComponent)
