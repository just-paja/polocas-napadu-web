import React from 'react'

import { renderWithI18n } from '../../../mock'
import { GroupDescription } from '..'

describe('GroupDescription component', () => {
  it('renders content as section', async () => {
    const comp = await renderWithI18n(<GroupDescription />)
    expect(comp.find('section')).toHaveLength(1)
  })

  it('renders heading', async () => {
    const comp = await renderWithI18n(<GroupDescription />)
    expect(comp.find('h1')).toHaveProp('children', 'groupDescriptionHeading')
  })

  it('renders perex', async () => {
    const comp = await renderWithI18n(<GroupDescription />)
    expect(comp.find('ReactMarkdown')).toHaveProp('source', 'groupDescriptionPerex')
  })
})
