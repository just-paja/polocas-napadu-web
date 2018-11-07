import { connect } from 'react-redux';

import StageNavigation from '../components/StageNavigation';

import { getPrevStages } from '../../board/selectors';

const mapStateToProps = state => ({
  availableStages: getPrevStages(state),
});

export default connect(mapStateToProps)(StageNavigation);
