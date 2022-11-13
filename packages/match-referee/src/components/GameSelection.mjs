import React from 'react'
import Select from 'react-select'

import { gql } from '@apollo/client'
import { withQuery } from 'polocas-napadu-ui/apollo.mjs'

const GET_GAMES = gql`
  query GameRules {
    gameRulesList {
      id
      name
    }
  }
`

export const GameSelection = withQuery(
  ({ classes, data, onChange, value }) => (
    <Select
      classes={classes}
      options={data.gameRulesList}
      getOptionLabel={option => option.name}
      getOptionValue={option => option.id}
      value={value}
      onChange={onChange}
      placeholder="Vyber kategorii"
      isClearable
    />
  ),
  GET_GAMES
)
