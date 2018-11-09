import PropTypes from 'prop-types';
import React from 'react';
import Typography from '@material-ui/core/Typography';

import InspirationSourceForm from '../containers/InspirationSourceForm';

const InspirationSource = ({ show }) => {
  if (!show) {
    return null;
  }
  return (
    <div>
      <Typography variant="display1">Inspiration source</Typography>
      <InspirationSourceForm />
    </div>
  );
};

InspirationSource.propTypes = {
  show: PropTypes.bool,
};

InspirationSource.defaultProps = {
  show: false,
};

export default InspirationSource;
