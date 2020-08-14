import React from 'react'

import { Bulb } from '../logo'
import { ContentContainer } from '../layout'
import { propsTranslated } from '../proptypes'
import { withTranslation } from '../../lib/i18n'

import styles from './HomeBanner.module.scss'

export const HomeBannerComponent = ({ t }) => (
  <header className={styles.banner}>
    <ContentContainer className={styles.container}>
      <div className={styles.circle}>
        <Bulb />
      </div>

      <div className={styles.text}>
        <h1>{t('projectName')}</h1>
        <p className='lead'>{t('projectNameAppendix')}</p>
      </div>
    </ContentContainer>
  </header>
)

HomeBannerComponent.propTypes = propsTranslated
HomeBannerComponent.displayName = 'HomeBanner'

export const HomeBanner = withTranslation(['common'])(HomeBannerComponent)
