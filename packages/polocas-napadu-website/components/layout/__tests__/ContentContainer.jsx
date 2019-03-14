import React from 'react'

import { ContentContainer } from '..'
import { mount } from 'enzyme'

describe('ContentContainer', () => {
  it('renders children', () => {
    const comp = mount(
      <ContentContainer>
        <div className='foo' />
      </ContentContainer>
    )
    expect(comp.find('.foo')).toHaveLength(1)
  })
})
