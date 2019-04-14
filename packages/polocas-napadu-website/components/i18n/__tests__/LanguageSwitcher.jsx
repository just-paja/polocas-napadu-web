import React from 'react'

import { LanguageSwitcher } from '..'
import { renderWithI18n } from '../../../mock'

describe('LanguageSwitcher component', () => {
  it('renders labels of all available languages', async () => {
    const comp = await renderWithI18n(<LanguageSwitcher router={{ pathname: '/' }} />, {
      defaultLanguage: 'cs',
      otherLanguages: ['en']
    })
    expect(comp).toIncludeText('Česky')
    expect(comp).toIncludeText('English')
  })

  it.skip('renders current language as span', async () => {
    const comp = await renderWithI18n(<LanguageSwitcher router={{ pathname: '/' }} />, {
      defaultLanguage: 'cs',
      otherLanguages: ['en']
    })
    expect(comp.find('[children="Česky"]').name()).toBe('span')
  })

  it('renders available language as link', async () => {
    const comp = await renderWithI18n(<LanguageSwitcher router={{ pathname: '/' }} />, {
      defaultLanguage: 'cs',
      otherLanguages: ['en']
    })
    expect(comp.find('[children="English"]').name()).toBe('a')
  })

  it.skip('renders available language url as a home url', async () => {
    const comp = await renderWithI18n(
      <LanguageSwitcher
        router={{ pathname: '/predstaveni/ostrov-ktery-jsem-prehlid' }}
      />, {
        defaultLanguage: 'cs',
        otherLanguages: ['en']
      }
    )
    expect(comp.find('[children="English"]')).toHaveProp(
      'href',
      '/en'
    )
  })

  it.skip('renders available language url as a replacement of current default language', async () => {
    const comp = await renderWithI18n(
      <LanguageSwitcher
        router={{ pathname: '/predstaveni/ostrov-ktery-jsem-prehlid' }}
      />, {
        defaultLanguage: 'cs',
        otherLanguages: ['en']
      }
    )
    expect(comp.find('[children="English"]')).toHaveProp(
      'href',
      '/en/predstaveni/ostrov-ktery-jsem-prehlid'
    )
  })

  it.skip('renders available language url as a replacement of current non-default language', async () => {
    const comp = await renderWithI18n(
      <LanguageSwitcher
        router={{ pathname: '/predstaveni/ostrov-ktery-jsem-prehlid' }}
      />, {
        defaultLanguage: 'cs',
        otherLanguages: ['en']
      }
    )
    expect(comp.find('[children="Česky"]')).toHaveProp(
      'href',
      '/cs/predstaveni/ostrov-ktery-jsem-prehlid'
    )
  })

  it.todo('renders available language url as a replacement of current language with query string')
})
