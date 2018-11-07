import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Save from '@material-ui/icons/Save';

import { Field, Form } from 'redux-form';

import { Input } from '../../components';

const GameSelectForm = ({ handleSubmit }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      component={Input}
      label="Inspiration"
      name="inspiration"
    />
    <Field
      component={Input}
      label="Extra information"
      name="extra"
    />
    <Button type="submit">
      <Save />
      Select
    </Button>
  </Form>
);

GameSelectForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default GameSelectForm;
