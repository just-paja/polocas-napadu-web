import { connect } from 'react-redux';

import SpectatorView from '../components/SpectatorView';

import { getStage } from '../../board/selectors';

const mapStateToProps = (state) => ({
  stage: getStage(state),
});

export default connect(mapStateToProps)(SpectatorView);
