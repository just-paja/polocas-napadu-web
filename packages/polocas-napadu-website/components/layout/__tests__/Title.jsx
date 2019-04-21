import React from 'react'

import { Title } from '..'
import { renderWithI18n } from '../../../mock'

describe('Title component', () => {
  it('renders text', async () => {
    const comp = await renderWithI18n(<Title text='foo' />)
    expect(comp).toIncludeText('foo')
  })

  it('renders site appendix', async () => {
    const comp = await renderWithI18n(<Title text='foo' />)
    expect(comp).toIncludeText('projectName')
  })

  it('given text is pure, then it renders text without appendix', async () => {
    const comp = await renderWithI18n(<Title text='foo' pure />)
    expect(comp).not.toIncludeText('projectName')
  })
})
