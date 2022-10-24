import React from 'react'

import { renderWithI18n } from '../../../mock'
import { SocialNetworks, SocialNetworkLink } from '../social.mjs'

describe('SocialNetworks component', () => {
  it('renders email link', async () => {
    const comp = await renderWithI18n(<SocialNetworks />)
    expect(comp.find('SocialNetworkLink[title="on-email"]')).toHaveLength(1)
  })

  it('renders facebook link', async () => {
    const comp = await renderWithI18n(<SocialNetworks />)
    expect(comp.find('SocialNetworkLink[title="on-facebook"]')).toHaveLength(1)
  })

  it('renders twitter link', async () => {
    const comp = await renderWithI18n(<SocialNetworks />)
    expect(comp.find('SocialNetworkLink[title="on-twitter"]')).toHaveLength(1)
  })

  it('renders instagram link', async () => {
    const comp = await renderWithI18n(<SocialNetworks />)
    expect(comp.find('SocialNetworkLink[title="on-instagram"]')).toHaveLength(1)
  })

  it('renders youtube link', async () => {
    const comp = await renderWithI18n(<SocialNetworks />)
    expect(comp.find('SocialNetworkLink[title="on-youtube"]')).toHaveLength(1)
  })
})

const TestIcon = () => <span />

describe('SocialNetworkLink component', () => {
  beforeEach(() => {
    jest.spyOn(window, 'open')
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('renders as anchor element', async () => {
    const comp = await renderWithI18n(
      <SocialNetworkLink
        icon={TestIcon}
        href="https://www.facebook.com/polocas.napadu/"
        title="Poločas nápadu na Facebooku"
      />
    )
    expect(comp.find('a')).toHaveLength(1)
  })

  it('renders with passed link', async () => {
    const comp = await renderWithI18n(
      <SocialNetworkLink
        icon={TestIcon}
        href="https://www.facebook.com/polocas.napadu/"
        title="Poločas nápadu na Facebooku"
      />
    )
    expect(
      comp.find('a[href="https://www.facebook.com/polocas.napadu/"]')
    ).toHaveLength(1)
  })

  it('renders with passed title', async () => {
    const comp = await renderWithI18n(
      <SocialNetworkLink
        icon={TestIcon}
        href="https://www.facebook.com/polocas.napadu/"
        title="Poločas nápadu na Facebooku"
      />
    )
    expect(comp.find('a[title="Poločas nápadu na Facebooku"]')).toHaveLength(1)
  })

  it('renders with passed icon', async () => {
    const comp = await renderWithI18n(
      <SocialNetworkLink
        icon={TestIcon}
        href="https://www.facebook.com/polocas.napadu/"
        title="Poločas nápadu na Facebooku"
      />
    )
    expect(comp.find('TestIcon')).toHaveLength(1)
  })

  it('given the link points to https, when clicked, then it opens new window', async () => {
    const comp = await renderWithI18n(
      <SocialNetworkLink
        icon={TestIcon}
        href="https://www.facebook.com/polocas.napadu/"
        title="Poločas nápadu na Facebooku"
      />
    )
    window.open.mockImplementation(() => {})
    comp.find('a').simulate('click')
    expect(window.open).toHaveBeenCalledTimes(1)
  })

  it('given the link points to mail, when clicked, then it does not open new window', async () => {
    const comp = await renderWithI18n(
      <SocialNetworkLink
        icon={TestIcon}
        href="mailto:ahoj@polocas-napadu.cz"
        title="Napiš nám e-mail"
      />
    )
    window.open.mockImplementation(() => {})
    comp.find('a').simulate('click')
    expect(window.open).not.toHaveBeenCalled()
  })
})
