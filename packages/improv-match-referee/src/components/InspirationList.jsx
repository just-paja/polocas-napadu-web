import classnames from 'classnames'
import Delete from '@material-ui/icons/Delete'
import InteractiveButton from './InteractiveButton'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React from 'react'

import { Classes, Inspiration } from 'polocas-napadu-core/proptypes'
import { gql } from 'apollo-boost'
import { Mutation } from '@apollo/react-components'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  readOnly: {
    marginLeft: theme.spacing.unit,
    textAlign: 'center'
  }
})

const INSPIRATION_DISCARD = gql`
  mutation InspirationDiscard($inspirationId: Int!) {
    discardInspiration(inspirationId: $inspirationId) {
      ok
    }
  }
`

const InspirationList = ({ classes, inspirations, readOnly }) => (
  <List>
    {inspirations.map(inspiration => (
      <ListItem
        className={classnames({ [classes.readOnly]: readOnly })}
        key={inspiration.id}
      >
        <ListItemText>{inspiration.text}</ListItemText>
        {readOnly ? null : (
          <ListItemSecondaryAction>
            <Mutation mutation={INSPIRATION_DISCARD}>
              {(mutate, { loading }) => (
                <InteractiveButton
                  loading={loading}
                  icon
                  onClick={() =>
                    mutate({
                      refetchQueries: ['MatchStage'],
                      variables: {
                        inspirationId: inspiration.id
                      }
                    })
                  }
                >
                  <Delete />
                </InteractiveButton>
              )}
            </Mutation>
          </ListItemSecondaryAction>
        )}
      </ListItem>
    ))}
  </List>
)

InspirationList.propTypes = {
  classes: Classes.isRequired,
  inspirations: PropTypes.arrayOf(Inspiration).isRequired,
  readOnly: PropTypes.bool
}

InspirationList.defaultProps = {
  readOnly: false
}

export default withStyles(styles)(InspirationList)
