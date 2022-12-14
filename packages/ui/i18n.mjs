import React from 'react'

import { propsTranslated } from '@polocas-napadu/core/proptypes.mjs'
import { use } from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'

export const withTranslation = Component => {
  const fn = props => {
    const { i18n, t } = useTranslation()
    return <Component {...props} i18n={i18n} t={t} />
  }
  Component.propTypes = propsTranslated
  fn.displayName = `i18n(${Component.name})`
  return fn
}

export const initLocalization = locales =>
  use(initReactI18next).init({
    resources: Object.fromEntries(
      Object.entries(locales).map(([lang, translation]) => [
        lang,
        { translation },
      ])
    ),
    lng: 'cs', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',
  })
