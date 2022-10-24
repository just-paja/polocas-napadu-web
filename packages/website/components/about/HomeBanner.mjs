import React from 'react'

import { BannerCarousel } from './BannerCarousel.mjs'
import { Bulb } from '../logo.mjs'
import { ContentContainer } from '../layout'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'

import styles from './HomeBanner.module.scss'

export const HomeBanner = withTranslation(({ t }) => {
  return (
    <header className={styles.banner}>
      <BannerCarousel className={styles.carousel} />
      <div className={styles.content}>
        <ContentContainer className={styles.container}>
          <div className={styles.circle}>
            <Bulb />
          </div>
          <Bulb className={styles.bulb2} color="inverse" />

          <div className={styles.text}>
            <h1>{t('projectName')}</h1>
            <p className="lead">{t('projectNameAppendix')}</p>
          </div>
        </ContentContainer>
      </div>
    </header>
  )
})
