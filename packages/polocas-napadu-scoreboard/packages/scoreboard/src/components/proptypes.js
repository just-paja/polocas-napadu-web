import PropTypes from 'prop-types';

import * as constants from '../constants';

export const ContestantType = PropTypes.oneOf([
  constants.CONTESTANT_HOME,
  constants.CONTESTANT_GUEST,
]);

export const Band = PropTypes.shape({
  name: PropTypes.isRequired,
});

export const Show = PropTypes.shape({
  name: PropTypes.isRequired,
  start: PropTypes.string,
});

export const ContestantGroup = PropTypes.shape({
  band: Band.isRequired,
  contestantType: ContestantType.isRequired,
})

export const Match = PropTypes.shape({
  closed: PropTypes.bool,
  contestantGroups: PropTypes.arrayOf(ContestantGroup).isRequired,
  id: PropTypes.number.isRequired,
  show: Show.isRequired,
});
