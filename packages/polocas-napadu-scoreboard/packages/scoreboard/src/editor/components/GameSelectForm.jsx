import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Save from '@material-ui/icons/Save';
import { Creatable } from 'react-select';

import { Field, Form } from 'redux-form';

import { Input } from '../../components';

const GameSelectForm = ({ availableGames, handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      component={Input}
      label="Game name"
      name="game"
      as={Creatable}
      options={availableGames}
      isSearchable
    />
    <Button type="submit">
      <Save />
      Select
    </Button>
  </Form>
);

GameSelectForm.propTypes = {
  availableGames: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default GameSelectForm;
