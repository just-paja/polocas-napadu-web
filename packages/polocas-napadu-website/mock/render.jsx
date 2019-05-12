import i18next from '../lib/i18n'

import { I18nextProvider } from 'next-i18next/node_modules/react-i18next'
import { mount } from 'enzyme'

export const translate = msg => msg

export const renderWithI18n = (component) => {
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
