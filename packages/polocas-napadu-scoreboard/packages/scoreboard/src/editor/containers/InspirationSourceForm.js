import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import InspirationSourceForm from '../components/InspirationSourceForm';

import { getInspirationSource } from '../../board/selectors';
import { topic } from '../../board/actions';

import * as constants from '../constants';

const mapStateToProps = state => ({
  initialValues: {
    url: getInspirationSource(state,)
  },
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(topic.setSource(values.url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: constants.FORM_INSPIRATION_SOURCE,
})(InspirationSourceForm));
