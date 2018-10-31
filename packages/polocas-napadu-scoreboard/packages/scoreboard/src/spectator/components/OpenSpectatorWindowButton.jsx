import Button from '@material-ui/core/Button';
import React from 'react';
import DesktopWindows from '@material-ui/icons/DesktopWindows';

const OpenSpectatorWindowButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <DesktopWindows />
    Open spectator window
  </Button>
);

export default OpenSpectatorWindowButton;
