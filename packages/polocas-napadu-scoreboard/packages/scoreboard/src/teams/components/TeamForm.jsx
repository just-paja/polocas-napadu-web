import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Save from '@material-ui/icons/Save';

import { Field, Form } from 'redux-form';

import { Input } from '../../components';

const TeamForm = ({ handleSubmit, name }) => (
  <Form onSubmit={handleSubmit}>
    <Field
      component={Input}
      label="Team name"
      name="name"
    />
    <Field
      component={Input}
      label="Team logo"
      name="name"
      type="url"
    />
    <Button type="submit">
      <Save />
      Save
    </Button>
  </Form>
);

TeamForm.propTypes = {
  name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default TeamForm;
