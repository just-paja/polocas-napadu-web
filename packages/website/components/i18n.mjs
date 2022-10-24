import React from 'react'
import styles from './i18n.module.scss'

import { OptionalLink } from './links.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'

const renderLink = (t, lngCurrent, lngChoice) => {
  return (
    <OptionalLink
      className={styles.link}
      fallbackComponent="span"
      isLink={lngChoice === lngCurrent ? 'span' : 'a'}
      key={lngChoice}
      language={lngChoice}
      route="home"
    >
      {t(`language-${lngChoice}`)}
    </OptionalLink>
  )
}

export const LanguageSwitcher = withTranslation(({ lng, i18n, t }) => (
  <div>
    {i18n.options.locales
      .filter(item => item !== 'default')
      .reduce((acc, lngChoice, index, src) => {
        const next = [...acc, renderLink(t, lng, lngChoice)]
        if (index < src.length - 1) {
          next.push(' | ')
        }
        return next
      }, [])}
  </div>
))
