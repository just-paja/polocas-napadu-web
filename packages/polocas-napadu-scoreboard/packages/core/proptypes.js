import PropTypes from 'prop-types';

export const Classes = PropTypes.objectOf(PropTypes.string);

export const ClassName = PropTypes.oneOfType([
  Classes,
  PropTypes.arrayOf(Classes),
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.string,
]);
