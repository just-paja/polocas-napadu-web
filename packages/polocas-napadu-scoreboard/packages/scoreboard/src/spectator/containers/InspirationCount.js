import { connect } from 'react-redux';

import InspirationCount from '../components/InspirationCount';

import { getInspirationCount } from '../../board/selectors';

const mapStateToProps = (state) => ({
  count: getInspirationCount(state),
});

export default connect(mapStateToProps)(InspirationCount);
