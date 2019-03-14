import React from 'react'

import { MainMenu } from '..'
import { renderWithI18n } from '../../../mock'

describe('MainMenu', () => {
  it('renders link home', async () => {
    const comp = await renderWithI18n(<MainMenu />)
    expect(comp.find('a[href="/"]')).toIncludeText('Poločas nápadu')
  })

  it('renders link to shows', async () => {
    const comp = await renderWithI18n(<MainMenu />)
    expect(comp.find('a[href="/predstaveni"]')).toIncludeText('Shows')
  })
})
