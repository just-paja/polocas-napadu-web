import { connect } from 'react-redux';

import TeamControls from '../components/TeamControls';

import { getSides } from '../../board/selectors';

const mapStateToProps = state => ({
  sides: getSides(state),
});

export default connect(mapStateToProps)(TeamControls);
