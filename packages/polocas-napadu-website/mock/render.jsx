import NextI18Next from 'next-i18next'

import { I18nextProvider } from 'react-i18next'
import { mount } from 'enzyme'
import { defaultSettings } from '../lib/i18n'

export const translate = msg => msg

export const withI18n = (component, i18n) => (
  <I18nextProvider i18n={i18n}>
    {component}
  </I18nextProvider>
)

export const mountWithI18n = (component, i18next) => {
  const comp = mount(withI18n(component, i18next.i18n))
  comp.i18next = i18next
  comp.i18n = i18next.i18n
  return comp
}

// i18n is instantiated only once per process
let i18nReady = false

export const renderWithI18n = (component, settings = {}) => {
  return new Promise((resolve, reject) => {
    const i18next = new NextI18Next({
      ...defaultSettings,
      ...settings
    })
    const comp = mountWithI18n(component, i18next)
    if (i18nReady) {
      resolve(comp)
    } else {
      i18next.i18n.on('initialized', () => {
        i18nReady = true
        resolve(mountWithI18n(component, i18next))
      })
    }
  })
}
