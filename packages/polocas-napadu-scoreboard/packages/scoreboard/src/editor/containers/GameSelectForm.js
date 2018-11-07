import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import GameSelectForm from '../components/GameSelectForm';

import {
  getAvailableGames,
  getCurrentGameId,
  getLastGameId,
} from '../../board/selectors';
import { game } from '../../board/actions';

import * as constants from '../constants';

const mapStateToProps = state => ({
  availableGames: getAvailableGames(state),
  currentGameId: getCurrentGameId(state),
  lastGameId: getLastGameId(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (values, currentGameId, lastGameId) => {
    const gameName = values.game.value;
    if (currentGameId !== null) {
      dispatch(game.gameChange(currentGameId, gameName));
    } else {
      dispatch(game.add({
        game: gameName,
        id: lastGameId === null ? 0 : lastGameId + 1,
      }));
    }
  },
});

const mergeProps = (stateProps, dispatchProps, mergeProps) => ({
  ...stateProps,
  ...dispatchProps,
  onSubmit: values => dispatchProps.onSubmit(values, stateProps.currentGameId, stateProps.lastGameId),
});

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxForm({
  form: constants.FORM_GAME_DETAILS,
})(GameSelectForm));
