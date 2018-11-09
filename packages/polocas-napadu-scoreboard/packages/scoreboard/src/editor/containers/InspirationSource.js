import { connect } from 'react-redux';

import InspirationSource from '../components/InspirationSource';

import { areTeamsEditable } from '../../board/selectors';

const mapStateToProps = state => ({
  show: areTeamsEditable(state),
});

export default connect(mapStateToProps)(InspirationSource);
