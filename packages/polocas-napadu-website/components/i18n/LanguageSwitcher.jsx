import React from 'react'
import PropTypes from 'prop-types'

import { I18n, propsTranslated, propsWithRouter } from '../proptypes'
import { withNamespaces } from '../../lib/i18n'
import { withRouter } from 'next/router'

const createLink = (lngChoice) => {
  return `/${lngChoice}`
}

const renderLink = (t, url, lngCurrent, lngChoice, lngDefault) => {
  const Comp = lngChoice === lngCurrent ? 'span' : 'a'
  return (
    <Comp
      key={lngChoice}
      href={lngChoice === lngCurrent
        ? undefined
        : createLink(lngChoice)
      }
    >
      {t(`language-${lngChoice}`)}
    </Comp>
  )
}

const LanguageSwitcherComponent = ({
  i18n,
  t,
  lng,
  router,
  ...other
}) => (
  <div>
    {i18n.options.allLanguages.map(lngChoice => renderLink(
      t,
      router.pathname,
      lng,
      lngChoice,
      i18n.options.defaultLanguage
    ))}
  </div>
)

LanguageSwitcherComponent.propTypes = {
  ...propsTranslated,
  ...propsWithRouter,
  i18n: I18n.isRequired,
  lng: PropTypes.string,
  router: PropTypes.shape({
    pathname: PropTypes.string
  }).isRequired
}

LanguageSwitcherComponent.defaultProps = {
  lng: null
}

export const LanguageSwitcher = withRouter(withNamespaces(['common'])(LanguageSwitcherComponent))
