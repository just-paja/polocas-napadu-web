import React from 'react'

import { Mutation } from '@apollo/react-components'

export const withMutation = (propName, mutation) => Component => props => (
  <Mutation mutation={mutation}>
    {mutate => <Component {...{ [propName]: mutate }} {...props} />}
  </Mutation>
)
