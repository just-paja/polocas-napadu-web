import React from 'react'
import styles from './Gallery.scss'

export function Gallery ({ photos }) {
  return (
    <div className={styles.gallery}>
      {photos.map(photo => (
        <div className={styles.photo} key={photo.id}>
          <img
            src={photo.image}
            alt={photo.description}
          />
        </div>
      ))}
    </div>
  )
}
