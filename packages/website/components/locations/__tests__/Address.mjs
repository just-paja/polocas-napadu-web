import React from 'react'

import { Address } from '..'
import { shallow } from 'enzyme'

describe('Address component', () => {
  it('renders as address element', () => {
    const comp = shallow(
      <Address address="Norská 16, 101 00 Praha, Vršovice" />
    )
    expect(comp.name()).toBe('address')
  })

  it('splits address with breaks', () => {
    const comp = shallow(
      <Address address="Norská 16, 101 00 Praha, Vršovice" />
    )
    expect(comp.html()).toBe(
      '<address>Norská 16<br/>101 00 Praha<br/>Vršovice<br/></address>'
    )
  })
})
