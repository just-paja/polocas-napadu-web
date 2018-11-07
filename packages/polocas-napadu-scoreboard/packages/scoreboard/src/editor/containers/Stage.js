import { connect } from 'react-redux';

import Stage from '../components/Stage';

import { getStage } from '../../board/selectors';

const mapStateToProps = (state) => ({
  stage: getStage(state),
});

export default connect(mapStateToProps)(Stage);
