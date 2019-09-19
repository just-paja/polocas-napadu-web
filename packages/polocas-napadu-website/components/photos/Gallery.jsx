import getConfig from 'next/config'
import React from 'react'
import styles from './Gallery.scss'

const { publicRuntimeConfig } = getConfig()

function root (url) {
  const split = url.split('/')
  const base = [split[0], split[1], split[2]]
  return base.join('/')
}

export function Gallery ({ photos }) {
  return (
    <div className={styles.gallery}>
      {photos.map(photo => (
        <div className={styles.photo} key={photo.id}>
          <img
            src={`${root(publicRuntimeConfig.API_URL)}${photo.image}`}
            alt={photo.description}
          />
        </div>
      ))}
    </div>
  )
}
