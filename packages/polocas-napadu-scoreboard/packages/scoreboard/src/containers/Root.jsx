import { connect } from 'react-redux';

import Root from '../components/Root';

import { isSpectator } from '../spectator/selectors';

const mapStateToProps = state => ({
  spectator: isSpectator(state),
});

export default connect(mapStateToProps)(Root);
