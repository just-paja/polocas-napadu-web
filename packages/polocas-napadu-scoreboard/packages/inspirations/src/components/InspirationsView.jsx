import React from 'react';

import { RouterContext } from 'core/context';

import ShowInspirations from './ShowInspirations';

const InspirationsView = ({ classes, match }) => (
  <RouterContext.Provider value={match.params}>
    <ShowInspirations />
  </RouterContext.Provider>
);

export default InspirationsView;
