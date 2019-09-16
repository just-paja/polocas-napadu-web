import i18next from '../lib/i18n'

import { I18nextProvider } from 'react-i18next'
import { mount } from 'enzyme'

export const translate = msg => msg

const mountWithI18n = (component) => {
  const comp = mount(
    <I18nextProvider i18n={i18next.i18n}>
      {component}
    </I18nextProvider>
  )
  comp.i18next = i18next
  comp.i18n = i18next.i18n
  jest.spyOn(i18next.i18n.translator, 'translate').mockImplementation(key => key)
  return comp
}

export const renderWithI18n = (component, settings = {}) => {
  return new Promise(resolve => resolve(mountWithI18n(component, i18next)))
}
