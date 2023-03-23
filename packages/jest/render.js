import React from 'react'
import i18n from 'i18next'

import { render } from '@testing-library/react'
import { I18nextProvider } from 'react-i18next'

const I18nWrapper = ({ children }) => (
  <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
)

export const renderWithI18n = (component, options) =>
  render(component, { wrapper: I18nWrapper, ...options })
