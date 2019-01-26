import React from 'react';

import { CONTESTANT_HOME } from '../../constants';

const TeamId = ({ teamId }) => (
  <span>
    {teamId === CONTESTANT_HOME ? 'Domácí' : 'Hosté'}
  </span>
);

export default TeamId;
