import React from 'react'

import { MainMenu } from '..'
import { renderWithI18n } from '../../../mock'

describe('MainMenu', () => {
  it('renders link home', () => {
    const comp = renderWithI18n(<MainMenu />)
    expect(comp.find('a[href="/"]')).toIncludeText('projectName')
  })

  it('renders link to shows', () => {
    const comp = renderWithI18n(<MainMenu />)
    expect(comp.find('a[href="/predstaveni"]')).toIncludeText('shows')
  })
})
