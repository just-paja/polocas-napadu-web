import React from 'react'

import { ArrayList } from './text.mjs'
import { ErrorType } from 'polocas-napadu-core/proptypes.mjs'
import { withTranslation } from './i18n.mjs'

export const AppError = () => <div>Application failed with Error!</div>

AppError.propTypes = {
  error: ErrorType,
}

export const NotFound = withTranslation(({ t }) => (
  <div>
    <h1>{t('error-not-found')}</h1>
    <p>{t('error-not-found-explanation-text')}</p>
    <ArrayList
      text={t('error-not-found-help-text', { returnObjects: true }) || []}
    />
  </div>
))

export const UnknownError = withTranslation(({ t }) => (
  <div>
    <h1>{t('error-unknown')}</h1>
    <p>{t('error-unknown-explanation-text')}</p>
    <ArrayList
      text={t('error-unknown-help-text', { returnObjects: true }) || []}
    />
  </div>
))
