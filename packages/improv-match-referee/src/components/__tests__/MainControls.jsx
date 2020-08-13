import React from 'react'
import MainControls from '../MainControls'

import { MatchContext } from 'core/context'
import { mount } from 'enzyme'
import { apolloWrap } from 'core/mock'

describe('MainControls', () => {
  it('given match is closed, then it does not render match speed dial', () => {
    const comp = mount(apolloWrap(
      <MatchContext.Provider
        value={{
          match: {
            closed: true
          }
        }}
      >
        <MainControls />
      </MatchContext.Provider>
    ))
    expect(comp.find('MatchSpeedDial')).toHaveLength(0)
  })
})
