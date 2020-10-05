import React from 'react'

import { renderWithI18n } from '../../../mock'
import { SocialNetworkLink } from '..'

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
        href='https://www.facebook.com/polocas.napadu/'
        title='Poločas nápadu na Facebooku'
      />
    )
    expect(comp.find('a')).toHaveLength(1)
  })

  it('renders with passed link', async () => {
    const comp = await renderWithI18n(
      <SocialNetworkLink
        icon={TestIcon}
        href='https://www.facebook.com/polocas.napadu/'
        title='Poločas nápadu na Facebooku'
      />
    )
    expect(comp.find('a[href="https://www.facebook.com/polocas.napadu/"]'))
      .toHaveLength(1)
  })

  it('renders with passed title', async () => {
    const comp = await renderWithI18n(
      <SocialNetworkLink
        icon={TestIcon}
        href='https://www.facebook.com/polocas.napadu/'
        title='Poločas nápadu na Facebooku'
      />
    )
    expect(comp.find('a[title="Poločas nápadu na Facebooku"]'))
      .toHaveLength(1)
  })

  it('renders with passed icon', async () => {
    const comp = await renderWithI18n(
      <SocialNetworkLink
        icon={TestIcon}
        href='https://www.facebook.com/polocas.napadu/'
        title='Poločas nápadu na Facebooku'
      />
    )
    expect(comp.find('TestIcon')).toHaveLength(1)
  })

  it('given the link points to https, when clicked, then it opens new window', async () => {
    const comp = await renderWithI18n(
      <SocialNetworkLink
        icon={TestIcon}
        href='https://www.facebook.com/polocas.napadu/'
        title='Poločas nápadu na Facebooku'
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
        href='mailto:ahoj@polocas-napadu.cz'
        title='Napiš nám e-mail'
      />
    )
    window.open.mockImplementation(() => {})
    comp.find('a').simulate('click')
    expect(window.open).not.toHaveBeenCalled()
  })
})
