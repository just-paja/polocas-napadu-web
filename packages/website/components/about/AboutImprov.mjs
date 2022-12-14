import couching from './photos/couching.webp'
import explaining from './photos/explaining.webp'
import sitting from './photos/sitting.webp'
import waving from './photos/waving.webp'
import drawing from './photos/drawing.webp'
import React from 'react'
import styles from './AboutImprov.module.scss'

import { withTranslation } from '@polocas-napadu/ui/i18n.mjs'

const GalleryPhoto = ({ src, alt }) => (
  <div className={styles.photo}>
    <img src={src} alt={alt} />
  </div>
)

export const AboutImprovLarge = withTranslation(({ t }) => (
  <div className={styles.col}>
    <GalleryPhoto alt={t('static-gallery-sitting')} src={sitting.src} />
    <GalleryPhoto alt={t('static-gallery-couching')} src={couching.src} />
    <GalleryPhoto alt={t('static-gallery-explaining')} src={explaining.src} />
    <GalleryPhoto alt={t('static-gallery-waving')} src={waving.src} />
    <GalleryPhoto alt={t('static-gallery-drawing')} src={drawing.src} />
  </div>
))
