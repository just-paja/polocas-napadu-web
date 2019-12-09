import Avatar from '@material-ui/core/Avatar'
import Group from '@material-ui/icons/Group'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import PropTypes from 'prop-types'
import React from 'react'

class TeamPenaltyButton extends React.Component {
  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange () {
    this.props.onChange(this.props.target)
  }

  render () {
    const { target, ...other } = this.props
    return (
      <ListItem
        {...other}
        button
        key={target.id}
        onClick={this.handleChange}
      >
        <ListItemAvatar>
          <Avatar>
            {target.avatar
              ? <img src={target.avatar} alt={target.name} />
              : <Group />}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={target.name} />
      </ListItem>
    )
  }
}

TeamPenaltyButton.propTypes = {
  target: PropTypes.shape({
    avatar: PropTypes.string,
    contestantGroupId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    playerId: PropTypes.string
  }).isRequired
}

export default TeamPenaltyButton
