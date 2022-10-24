import React from 'react'

import { LanguageSwitcher } from '../i18n.mjs'
import { renderWithI18n } from '../../../mock'

describe('LanguageSwitcher component', () => {
  it('renders labels of all available languages', async () => {
    const comp = await renderWithI18n(
      <LanguageSwitcher router={{ pathname: '/' }} />,
      {
        defaultLanguage: 'cs',
        otherLanguages: ['en'],
      }
    )
    expect(comp).toIncludeText('language-cs')
    expect(comp).toIncludeText('language-en')
  })

  it('renders available language as link', async () => {
    const comp = await renderWithI18n(
      <LanguageSwitcher router={{ pathname: '/' }} />,
      {
        defaultLanguage: 'cs',
        otherLanguages: ['en'],
      }
    )
    expect(comp.find('[children="language-en"]').last().name()).toBe('a')
  })
})
