import React from 'react';

import { ErrorMessage } from 'core/proptypes';

const AppError = ({ error }) => {
  if (!error) {
    return null;
  }
  if (error instanceof Error) {
    return (
      <span>{error.message}</span>
    );
  }
  return <span>{error}</span>;
};

AppError.propTypes = {
  error: ErrorMessage,
};

AppError.defaultProps = {
  error: null,
};

export default AppError;
