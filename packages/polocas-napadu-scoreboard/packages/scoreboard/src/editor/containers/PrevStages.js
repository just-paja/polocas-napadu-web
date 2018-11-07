import { connect } from 'react-redux';

import StageNavigation from '../components/StageNavigation';

import { stage } from '../../board/actions';
import { canMoveBackward } from '../../board/selectors';

const mapStateToProps = state => ({
  availableStages: [],
  canMoveBackward: canMoveBackward(state),
});

const mapDispatchToProps = {
  onBack: () => stage.back(),
};

export default connect(mapStateToProps, mapDispatchToProps)(StageNavigation);
