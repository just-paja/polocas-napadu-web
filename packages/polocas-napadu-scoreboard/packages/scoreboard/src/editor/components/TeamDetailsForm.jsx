import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';
import Save from '@material-ui/icons/Save';

import { Field, Form } from 'redux-form';

import { Input } from '../../components';
import { TeamId } from '../../board/components';

const TeamForm = ({ handleSubmit, teamId }) => (
  <Form onSubmit={handleSubmit}>
    <h1><TeamId teamId={teamId} /></h1>
    <Field
      component={Input}
      label="Team name"
      name="name"
    />
    <Field
      component={Input}
      label="Team logo"
      name="logo"
      type="url"
    />
    <Button type="submit">
      <Save />
      Save
    </Button>
  </Form>
);

TeamForm.propTypes = {
  teamId: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default TeamForm;
