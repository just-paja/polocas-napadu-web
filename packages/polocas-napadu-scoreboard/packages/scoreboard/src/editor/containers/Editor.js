import { connect } from 'react-redux';

import Editor from '../components/Editor';

import { getSides } from '../../board/selectors';

const mapStateToProps = state => ({
  sides: getSides(state),
});

export default connect(mapStateToProps)(Editor);
