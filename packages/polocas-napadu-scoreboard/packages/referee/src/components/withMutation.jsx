import React from 'react';

import { Mutation } from 'react-apollo';

export const withMutation = (propName, mutation) => Component => props => (
  <Mutation mutation={mutation}>
    {mutate => <Component {...{ [propName]: mutate }} {...props} />}
  </Mutation>
);
