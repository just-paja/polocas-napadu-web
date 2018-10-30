import { connect } from 'react-redux';

import { TeamForm } from '../../teams/components';


export default (routine, initialValueSelector) => {
  const mapStateToProps = (state) => ({
    initialValue: initialValueSelector(state),
  });

  const mapDispatchToProps = {
    onSubmit: routine.dataChange,
  };

  return connect(mapStateToProps, mapDispatchToProps)(TeamForm);
};
