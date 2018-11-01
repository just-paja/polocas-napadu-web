import { connect } from 'react-redux';

import SpectatorView from '../components/SpectatorView';

import { getSides } from '../../board/selectors';

const mapStateToProps = (state) => ({
  sides: getSides(state),
});

export default connect(mapStateToProps)(SpectatorView);
