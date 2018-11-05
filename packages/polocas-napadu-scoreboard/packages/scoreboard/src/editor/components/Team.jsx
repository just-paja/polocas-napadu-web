import React from 'react';
import PropTypes from 'prop-types';

import TeamDetailsForm from '../containers/TeamDetailsForm';
import TeamSummary from '../containers/TeamSummary';

const Team = ({ edit, side }) => (edit
  ? <TeamDetailsForm side={side} />
  : <TeamSummary side={side} />
);

Team.propTypes = {
  edit: PropTypes.bool,
  side: PropTypes.string.isRequired,
};

Team.defaultProps = {
  edit: false,
};

export default Team;
