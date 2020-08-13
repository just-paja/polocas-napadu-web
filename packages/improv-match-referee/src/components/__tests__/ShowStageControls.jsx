import React from 'react'
import ShowStageControls from '../ShowStageControls'

import { MatchContext } from 'core/context'
import { mount } from 'enzyme'
import { apolloWrap } from 'core/mock'

describe('ShowStageControls', () => {
  it('given match is closed, then it renders empty', () => {
    const comp = mount(apolloWrap(
      <MatchContext.Provider
        value={{
          match: {
            closed: true
          }
        }}
      >
        <ShowStageControls />
      </MatchContext.Provider>
    ))
    expect(comp.find('ShowProgress')).toHaveLength(0)
  })
})
