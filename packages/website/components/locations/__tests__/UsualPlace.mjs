import React from 'react'

import { UsualPlace } from '..'
import { mount } from 'enzyme'

describe('UsualPlace component', () => {
  it('renders name', () => {
    const comp = mount(
      <UsualPlace
        place={{
          id: '42',
          name: 'Zkušebna',
          description: 'Tady pravidelně trénujeme',
          location: {
            address: 'Norská 16, 101 00 Praha, Vršovice',
            name: 'Neobyčejná klubovna',
          },
          placeType: 1,
        }}
      />
    )
    expect(comp).toIncludeText('Zkušebna')
  })

  it('renders place description as markdown', () => {
    const comp = mount(
      <UsualPlace
        place={{
          id: '42',
          name: 'Zkušebna',
          description: 'Tady pravidelně trénujeme',
          location: {
            address: 'Norská 16, 101 00 Praha, Vršovice',
            name: 'Neobyčejná klubovna',
          },
          placeType: 1,
        }}
      />
    )
    expect(comp.find('ReactMarkdown')).toHaveProp(
      'source',
      'Tady pravidelně trénujeme'
    )
  })

  it('renders location detail', () => {
    const comp = mount(
      <UsualPlace
        place={{
          id: '42',
          name: 'Zkušebna',
          description: 'Tady pravidelně trénujeme',
          location: {
            address: 'Norská 16, 101 00 Praha, Vršovice',
            name: 'Neobyčejná klubovna',
          },
          placeType: 1,
        }}
      />
    )
    expect(comp.find('Location')).toHaveProp('location', {
      address: 'Norská 16, 101 00 Praha, Vršovice',
      name: 'Neobyčejná klubovna',
    })
  })
})
