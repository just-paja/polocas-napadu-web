import React from 'react'

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

export const LanguageSwitcher = withRouter(withNamespaces(['navigation'])(({
  i18n,
  t,
  lng,
  router,
  ...other
}) => {
  return (
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
}))
