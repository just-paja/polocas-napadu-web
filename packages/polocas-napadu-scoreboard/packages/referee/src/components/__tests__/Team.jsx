import React from 'react';
import Team from '../Team';

import { MatchContext } from 'core/context';
import { mount } from 'enzyme';
import { apolloWrap } from 'core/mock';

describe('Team component', () => {
  it('given selected team is null, then it renders as null', () => {
    const comp = mount(apolloWrap(
      <MatchContext.Provider
        value={{
          match: {
            contestantGroups: [],
          },
        }}
      >
        <Team side="left" />
      </MatchContext.Provider>
    ));
    expect(comp.find('Team').children()).toHaveLength(0)
  });
});
