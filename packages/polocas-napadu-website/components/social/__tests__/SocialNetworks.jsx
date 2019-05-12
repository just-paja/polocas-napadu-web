import React from 'react'

import { renderWithI18n } from '../../../mock'
import { SocialNetworks } from '..'

describe('SocialNetworks component', () => {
  it('renders email link', () => {
    const comp = renderWithI18n(<SocialNetworks />)
    expect(comp.find('SocialNetworkLink[title="on-email"]')).toHaveLength(1)
  })

  it('renders facebook link', () => {
    const comp = renderWithI18n(<SocialNetworks />)
    expect(comp.find('SocialNetworkLink[title="on-facebook"]')).toHaveLength(1)
  })

  it('renders twitter link', () => {
    const comp = renderWithI18n(<SocialNetworks />)
    expect(comp.find('SocialNetworkLink[title="on-twitter"]')).toHaveLength(1)
  })

  it('renders youtube link', () => {
    const comp = renderWithI18n(<SocialNetworks />)
    expect(comp.find('SocialNetworkLink[title="on-youtube"]')).toHaveLength(1)
  })
})
