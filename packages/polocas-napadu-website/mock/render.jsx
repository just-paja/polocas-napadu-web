import { I18nextProvider } from 'react-i18next'
import { mount } from 'enzyme'
import { i18n } from '../lib/i18n'

export const translate = msg => msg

export const withI18n = component => (
  <I18nextProvider i18n={i18n}>
    {component}
  </I18nextProvider>
)

let i18nReady = false

export const renderWithI18n = (component) => new Promise((resolve, reject) => {
  const comp = mount(withI18n(component))
  if (i18nReady) {
    resolve(comp)
  } else {
    i18n.on('initialized', () => {
      i18nReady = true
      resolve(mount(withI18n(component)))
    })
  }
})
