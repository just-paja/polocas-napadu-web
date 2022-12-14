import React from 'react'
// import Select from 'react-select'

import { Input } from '@polocas-napadu/ui/Form.mjs'
import { gql } from '@apollo/client'
import { withQuery } from '@polocas-napadu/ui/apollo.mjs'

const GET_GAMES = gql`
  query FoulTypes {
    foulTypeList {
      id
      name
    }
  }
`

export const FoulSelection = withQuery(
  ({ data, ...props }) => (
    <Input
      {...props}
      options={data.foulTypeList.map(option => ({
        label: option.name,
        value: option.id,
      }))}
      placeholder="Vyber druh chyby"
      type="select"
    />
  ),
  GET_GAMES
)
