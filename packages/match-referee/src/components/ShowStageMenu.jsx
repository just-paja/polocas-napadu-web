import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PropTypes from 'prop-types'
import React from 'react'

import { Children } from 'polocas-napadu-core/proptypes'
import { STAGE_OPTIONS, STAGES_JUMP } from 'polocas-napadu-core/constants'

class ShowStageMenu extends React.Component {
  constructor () {
    super()
    this.handleClose = this.handleClose.bind(this)
    this.handleOpen = this.handleOpen.bind(this)
    this.state = {
      anchorEl: null
    }
  }

  handleClose () {
    this.setState({ anchorEl: null })
  }

  handleOpen (event) {
    this.setState({ anchorEl: event.currentTarget })
  }

  render () {
    const { matchId, mutate, omit } = this.props
    return (
      <>
        <IconButton onClick={this.handleOpen}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          anchorEl={this.state.anchorEl}
          onClose={this.handleClose}
          open={Boolean(this.state.anchorEl)}
        >
          {STAGE_OPTIONS.filter(
            option =>
              STAGES_JUMP.indexOf(option.value) !== -1 &&
              omit.indexOf(option.value) === -1
          ).map(option => {
            const handleClick = () =>
              mutate({
                refetchQueries: ['MatchStage'],
                variables: {
                  matchId,
                  stage: option.value
                }
              })

            return (
              <MenuItem key={option.value} onClick={handleClick}>
                {option.label}
              </MenuItem>
            )
          })}
        </Menu>
      </>
    )
  }
}

ShowStageMenu.propTypes = {
  children: Children,
  mutate: PropTypes.func.isRequired,
  omit: PropTypes.arrayOf(PropTypes.string)
}

ShowStageMenu.defaultProps = {
  omit: []
}

export default ShowStageMenu
