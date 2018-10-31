import Button from '@material-ui/core/Button';
import React from 'react';
import Flip from '@material-ui/icons/Flip';

const FlipSidesButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Flip />
    Flip sides
  </Button>
);

export default FlipSidesButton;
