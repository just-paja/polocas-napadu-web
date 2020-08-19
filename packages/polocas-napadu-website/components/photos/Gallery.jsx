import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './Gallery.module.scss'

import { Image } from './Image'

export function Gallery ({ free, photos }) {
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
  free: PropTypes.bool
}
