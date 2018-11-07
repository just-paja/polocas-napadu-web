import { connect } from 'react-redux';

import StageNavigation from '../components/StageNavigation';

import { stage } from '../../board/actions';
import { getNextStages, canAdvance, canMoveForward } from '../../board/selectors';

const mapStateToProps = state => ({
  availableStages: getNextStages(state),
  canMoveForward: canMoveForward(state),
  canAdvance: canAdvance(state),
});

const mapDispatchToProps = {
  onForward: () => stage.forward(),
};

export default connect(mapStateToProps, mapDispatchToProps)(StageNavigation);
