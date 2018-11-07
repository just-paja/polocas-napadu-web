import { connect } from 'react-redux';

import StageNavigation from '../components/StageNavigation';

import { getNextStages } from '../../board/selectors';

const mapStateToProps = state => ({
  availableStages: getNextStages(state),
});

export default connect(mapStateToProps)(StageNavigation);
