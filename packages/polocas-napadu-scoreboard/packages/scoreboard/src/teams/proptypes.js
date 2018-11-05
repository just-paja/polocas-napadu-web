import PropTypes from 'prop-types';

export const Team = PropTypes.shape({
  logo: PropTypes.string,
  name: PropTypes.string,
  penalties: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
});
