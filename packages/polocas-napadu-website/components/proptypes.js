import PropTypes from 'prop-types';

export const Children = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node),
]);

export const Classes = PropTypes.objectOf(PropTypes.string);

export const ClassName = PropTypes.oneOfType([
  Classes,
  PropTypes.arrayOf(Classes),
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.string,
]);

export const Location = PropTypes.shape({
  name: PropTypes.string.isRequired,
});

export const Show = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: Location.isRequired,
  start: PropTypes.string.isRequired,
});
