import React from 'react'
import styles from './QueryLoader.module.scss'

import { withTranslation } from '../../lib/i18n'

function QueryLoaderComponent ({ t }) {
  return <div className={styles.container}>{t('loading')}</div>
}

QueryLoaderComponent.displayName = 'QueryLoader'

export const QueryLoader = withTranslation(['common'])(QueryLoaderComponent)
