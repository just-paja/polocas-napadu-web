import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { TeamForm } from '../../teams/components';

export default (routine, initialValueSelector, form, name) => {
  const mapStateToProps = (state) => ({
    initialValue: initialValueSelector(state),
  });

  const mapDispatchToProps = {
    onSubmit: values => routine.dataChange(values),
  };

  return connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form,
    name,
  })(TeamForm));
};
