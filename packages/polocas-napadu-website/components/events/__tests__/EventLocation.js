import moment from 'moment';
import React from 'react';

import { shallow } from 'enzyme';
import { advanceTo, clear } from 'jest-date-mock';

import { EventLocation } from '..';

describe('EventStart component', () => {
  it('given location, renders location name', () => {
    const comp = shallow(<EventLocation location={{ name: 'Foo' }} />);
    expect(comp).toIncludeText('Foo');
  });

  it.todo('given location, renders link to location detail');
});
