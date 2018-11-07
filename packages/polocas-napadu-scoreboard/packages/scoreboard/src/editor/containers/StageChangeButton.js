import { connect } from 'react-redux';

import StageChangeButton from '../components/StageChangeButton';

import { stage } from '../../board/actions';

const mapStateToProps = undefined;

const mapDispatchToProps = {
  onClick: stage.change,
};

export default connect(mapStateToProps, mapDispatchToProps)(StageChangeButton);
