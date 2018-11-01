import { connect } from 'react-redux';

import OpenSpectatorWindowButton from '../components/OpenSpectatorWindowButton';

import { spectatorWindow } from '../actions';

const mapStateToProps = undefined;

const mapDispatchToProps = {
  onClick: () => spectatorWindow.open(),
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenSpectatorWindowButton);
