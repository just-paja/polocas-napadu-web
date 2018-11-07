import PropTypes from 'prop-types';
import React from 'react';

const GameInspiration = ({ gameName, inspiration }) => (
  <div>
    {inspiration}
  </div>
);

GameInspiration.propTypes = {
  gameName: PropTypes.string,
  inspiration: PropTypes.string,
};

export default GameInspiration;
