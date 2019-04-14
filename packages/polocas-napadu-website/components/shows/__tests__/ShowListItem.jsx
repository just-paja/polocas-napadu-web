import React from 'react'

import { shallow } from 'enzyme'

import { ShowListItem } from '..'

describe('ShowListItem component', () => {
  it('renders event with start date', () => {
    const comp = shallow(
      <ShowListItem
        show={{
          id: '13',
          name: 'Dvouhodinový motel',
          start: '2019-03-08T19:30:00',
          location: {
            name: 'Divadlo Bez Hranic'
          }
        }}
      />
    )
    expect(comp.find('EventStart')).toHaveProp('start', '2019-03-08T19:30:00')
  })
})
