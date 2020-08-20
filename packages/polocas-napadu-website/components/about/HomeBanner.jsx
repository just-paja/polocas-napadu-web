import React from 'react'

import { BannerCarousel } from './BannerCarousel.jsx'
import { Bulb } from '../logo'
import { ContentContainer } from '../layout'
import { propsTranslated } from 'polocas-napadu-core/proptypes'
import { withTranslation } from '../../lib/i18n'

import styles from './HomeBanner.module.scss'

export const HomeBannerComponent = ({ t }) => {
  return (
    <header className={styles.banner}>
      <BannerCarousel className={styles.carousel} />
      <div className={styles.content}>
        <ContentContainer className={styles.container}>
          <div className={styles.circle}>
            <Bulb />
          </div>
          <Bulb className={styles.bulb2} color='inverse' />

          <div className={styles.text}>
            <h1>{t('projectName')}</h1>
            <p className='lead'>{t('projectNameAppendix')}</p>
          </div>
        </ContentContainer>
      </div>
    </header>
  )
}

HomeBannerComponent.propTypes = propsTranslated
HomeBannerComponent.displayName = 'HomeBanner'

export const HomeBanner = withTranslation(['common'])(HomeBannerComponent)
