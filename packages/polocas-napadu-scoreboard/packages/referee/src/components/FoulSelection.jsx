import GraphContainer from './GraphContainer'
import React from 'react'
import Select from 'react-select'

import { gql } from 'apollo-boost'
import { Classes } from 'core/proptypes'
import { withStyles } from '@material-ui/core/styles'

const styles = {
}

const GET_GAMES = gql`
  query FoulTypes {
    foulTypeList {
      id,
      name,
    }
  }
`

const FoulSelection = ({ classes, data, onChange, theme, value }) => (
  <Select
    classes={classes}
    options={data.foulTypeList}
    getOptionLabel={option => option.name}
    getOptionValue={option => option.id}
    value={value}
    onChange={onChange}
    placeholder='Vyber druh chyby'
    isClearable
  />
)

FoulSelection.propTypes = {
  classes: Classes.isRequired
}

export default GraphContainer(
  withStyles(styles, { withTheme: true })(FoulSelection),
  GET_GAMES
)
