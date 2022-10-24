import React from 'react'

import { propsTranslated } from 'polocas-napadu-core/proptypes.mjs'
import { useTranslation } from 'next-i18next'

export const withTranslation = Component => {
  const fn = props => {
    const { i18n, t } = useTranslation()
    return <Component {...props} i18n={i18n} t={t} />
  }
  Component.propTypes = propsTranslated
  fn.displayName = `i18n(${Component.name})`
  return fn
}
