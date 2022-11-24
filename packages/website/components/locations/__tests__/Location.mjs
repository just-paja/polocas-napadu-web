import React from 'react'

import { Location } from '..'
import { shallow } from 'enzyme'

describe('Location component', () => {
  it('renders name', () => {
    const comp = shallow(
      <Location
        location={{
          address: 'Norská 16, 101 00 Praha, Vršovice',
          name: 'Neobyčejná klubovna',
        }}
      />
    )
    expect(comp).toIncludeText('Neobyčejná klubovna')
  })

  it('renders location address', () => {
    const comp = shallow(
      <Location
        location={{
          address: 'Norská 16, 101 00 Praha, Vršovice',
          name: 'Neobyčejná klubovna',
        }}
      />
    )
    expect(comp.find('Address')).toHaveProp(
      'address',
      'Norská 16, 101 00 Praha, Vršovice'
    )
  })
})
