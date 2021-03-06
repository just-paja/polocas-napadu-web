import React from 'react'

import { shallow } from 'enzyme'

import { EventLocation } from '..'

describe('EventStart component', () => {
  it('given location, renders location name', () => {
    const comp = shallow(<EventLocation location={{ name: 'Foo' }} />)
    expect(comp).toIncludeText('Foo')
  })
})
