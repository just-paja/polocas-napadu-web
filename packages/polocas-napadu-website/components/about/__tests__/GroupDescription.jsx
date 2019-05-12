import React from 'react'

import { renderWithI18n } from '../../../mock'
import { GroupDescription } from '..'

describe('GroupDescription component', () => {
  it('renders content as section', () => {
    const comp = renderWithI18n(<GroupDescription />)
    expect(comp.find('section')).toHaveLength(1)
  })

  it('renders heading', () => {
    const comp = renderWithI18n(<GroupDescription />)
    expect(comp.find('h1')).toHaveProp('children', 'group-description-heading')
  })

  it('renders perex', () => {
    const comp = renderWithI18n(<GroupDescription />)
    expect(comp.find('ReactMarkdown')).toHaveProp('source', 'group-description-perex')
  })
})
