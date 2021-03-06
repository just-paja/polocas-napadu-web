import PropTypes from 'prop-types'
import React from 'react'
import styles from './LanguageSwitcher.module.scss'

import { OptionalLink } from '../bindings'
import { I18n, propsTranslated } from 'polocas-napadu-core/proptypes'
import { withTranslation } from '../../lib/i18n'

const renderLink = (t, lngCurrent, lngChoice, lngDefault) => {
  return (
    <OptionalLink
      className={styles.link}
      fallbackComponent='span'
      isLink={lngChoice === lngCurrent ? 'span' : 'a'}
      key={lngChoice}
      language={lngChoice}
      route='home'
    >
      {t(`language-${lngChoice}`)}
    </OptionalLink>
  )
}

function LanguageSwitcherComponent ({ i18n, t, lng, ...other }) {
  return (
    <div>
      {i18n.options.allLanguages.reduce((acc, lngChoice, index, src) => {
        const next = [
          ...acc,
          renderLink(t, lng, lngChoice, i18n.options.defaultLanguage)
        ]
        if (index < src.length - 1) {
          next.push(' | ')
        }
        return next
      }, [])}
    </div>
  )
}

LanguageSwitcherComponent.propTypes = {
  ...propsTranslated,
  i18n: I18n.isRequired,
  lng: PropTypes.string
}

LanguageSwitcherComponent.defaultProps = {
  lng: null
}

export const LanguageSwitcher = withTranslation(['common'])(
  LanguageSwitcherComponent
)
