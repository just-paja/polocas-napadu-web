import React from 'react'

import { renderWithI18n } from '../../../mock'
import { mount } from 'enzyme'
import { Title } from '..'

describe('Title component', () => {
  it('renders head component', async () => {
    const comp = await renderWithI18n(<Title text='foo' />)
    expect(comp.find('Head')).toHaveLength(1)
  })

  it('renders title in head component', async () => {
    const comp = await renderWithI18n(<Title text='foo' />)
    const head = mount(<div>{comp.find('Head').prop('children')}</div>)
    expect(head.find('title')).toIncludeText('foo')
  })

  it('renders site appendix', async () => {
    const comp = await renderWithI18n(<Title text='foo' />)
    const head = mount(<div>{comp.find('Head').prop('children')}</div>)
    expect(head.find('title')).toIncludeText('projectName')
  })

  it('given text is pure, then it renders text without appendix', async () => {
    const comp = await renderWithI18n(<Title text='foo' pure />)
    expect(comp.find('title')).not.toIncludeText('projectName')
  })
})
