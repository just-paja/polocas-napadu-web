import React from 'react'

import { renderWithI18n } from '../../../mock'
import { shallow } from 'enzyme'
import { Title } from '..'

describe('Title component', () => {
  it('renders head component', () => {
    const comp = renderWithI18n(<Title text='foo' />)
    expect(comp.find('Head')).toHaveLength(1)
  })

  it('renders title in head component', () => {
    const comp = renderWithI18n(<Title text='foo' />)
    const head = shallow(comp.find('Head').prop('children'))
    expect(head).toIncludeText('foo')
  })

  it('renders site appendix', () => {
    const comp = renderWithI18n(<Title text='foo' />)
    const head = shallow(comp.find('Head').prop('children'))
    expect(head).toIncludeText('projectName')
  })

  it('given text is pure, then it renders text without appendix', () => {
    const comp = renderWithI18n(<Title text='foo' pure />)
    const head = shallow(comp.find('Head').prop('children'))
    expect(head).not.toIncludeText('projectName')
  })
})
