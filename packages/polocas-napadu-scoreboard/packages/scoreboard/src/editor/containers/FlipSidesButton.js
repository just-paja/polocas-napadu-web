import { connect } from 'react-redux';

import FlipSidesButton from '../components/FlipSidesButton';

import { flipSides } from '../../board/actions';

const mapStateToProps = undefined;

const mapDispatchToProps = {
  onClick: () => flipSides.trigger(),
};

export default connect(mapStateToProps, mapDispatchToProps)(FlipSidesButton);
