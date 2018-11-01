import { connect } from 'react-redux';

import MonitorView from '../components/MonitorView';

import { getSides } from '../../board/selectors';

const mapStateToProps = state => ({
  sides: getSides(state),
});

export default connect(mapStateToProps)(MonitorView);
