import Button from '@material-ui/core/Button';
import React from 'react';
import Edit from '@material-ui/icons/Edit';

const EditTeamButton = ({ onClick }) => (
  <Button onClick={onClick}>
    <Edit />
    Edit Team details
  </Button>
);

export default EditTeamButton;
