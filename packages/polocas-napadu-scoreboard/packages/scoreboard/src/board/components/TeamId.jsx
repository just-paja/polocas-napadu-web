import React from 'react';

import { CONTESTANT_HOME } from 'core/constants';

const TeamId = ({ teamId }) => (
  <span>
    {teamId === CONTESTANT_HOME ? 'Domácí' : 'Hosté'}
  </span>
);

export default TeamId;
