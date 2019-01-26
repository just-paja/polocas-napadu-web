import PropTypes from 'prop-types';

import * as constants from './constants';

export const Classes = PropTypes.objectOf(PropTypes.string);

export const ClassName = PropTypes.oneOfType([
  Classes,
  PropTypes.arrayOf(Classes),
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.string,
]);

export const ContestantType = PropTypes.oneOf([
  constants.CONTESTANT_HOME,
  constants.CONTESTANT_GUEST,
]);

export const Band = PropTypes.shape({
  name: PropTypes.isRequired,
});

export const Location = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

export const Show = PropTypes.shape({
  name: PropTypes.isRequired,
  location: Location.isRequired,
  start: PropTypes.string.isRequired,
});

export const ContestantGroup = PropTypes.shape({
  band: Band.isRequired,
  contestantType: ContestantType.isRequired,
})

export const Match = PropTypes.shape({
  closed: PropTypes.bool,
  contestantGroups: PropTypes.arrayOf(ContestantGroup).isRequired,
  id: PropTypes.string.isRequired,
  show: Show.isRequired,
});
