import React from 'react';

import { TEAM_HOME } from '../constants';

const TeamId = ({ teamId }) => (
  <span>
    {teamId === TEAM_HOME ? 'Domácí' : 'Hosté'}
  </span>
);

export default TeamId;
