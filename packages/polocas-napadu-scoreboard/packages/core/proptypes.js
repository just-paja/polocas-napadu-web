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
});

export const Inspiration = PropTypes.shape({
  text: PropTypes.string.isRequired,
});

export const Game = PropTypes.shape({
  type: PropTypes.string.isRequired,
  inspirations: PropTypes.arrayOf(Inspiration).isRequired,
});

export const Stage = PropTypes.shape({
  type: PropTypes.oneOf([
    constants.STAGE_INTRO,
    constants.STAGE_GAME_SETUP,
    constants.STAGE_GAME,
    constants.STAGE_VOTING,
    constants.STAGE_GAME_RESULTS,
    constants.STAGE_PAUSE,
    constants.STAGE_FINALE,
  ]),
  game: Game,
});

export const Match = PropTypes.shape({
  closed: PropTypes.bool,
  currentStage: Stage,
  contestantGroups: PropTypes.arrayOf(ContestantGroup).isRequired,
  id: PropTypes.string.isRequired,
  show: Show.isRequired,
});

export const ErrorMessage = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.shape({
    message: PropTypes.string,
  }),
]);
