import React from 'react';
import PropTypes from 'prop-types';

import FlipSidesButton from '../containers/FlipSidesButton';
import TeamGuestForm from '../containers/TeamGuestForm';
import TeamHomeForm from '../containers/TeamHomeForm';

import * as constants from '../../board/constants';

const getForm = team => (
  team === constants.TEAM_HOME
    ? <TeamHomeForm />
    : <TeamGuestForm />
);

const Editor = ({ sides }) => (
  <div>
    {getForm(sides.left)}
    {getForm(sides.right)}
    <FlipSidesButton />
  </div>
);

Editor.propTypes = {
  sides: PropTypes.shape({
    left: PropTypes.string.isRequired,
    right: PropTypes.string.isRequired,
  }).isRequired,
};

export default Editor;
