import camelCase from 'camelcase';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { Band } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';
import { TEAM_LOGO_DEFAULT } from 'core/constants';

import TeamScore from './TeamScore';

const styles = theme => ({
  name: {
    display: 'flex',
    margin: '0 auto 0 auto',
    minWidth: 0,
    overflow: 'hidden',
    padding: '1rem 2rem',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  nameBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nameBarRight: {
    flexDirection: 'row-reverse',
  },
  logo: {
    display: 'none',
    height: '6.5rem',
    width: '6.5rem',
    margin: '-2.5rem -1.25rem',
  },
  penalty: {
    background: 'red',
    display: 'inline-block',
    height: '3rem',
    width: '1.25rem',
    margin: '0 .25rem',
    opacity: .75,
  },
  penalties: {
    position: 'absolute',
    bottom: '-2.9rem',
    right: '8rem',
  },
  penaltiesRight: {
    right: 'auto',
    left: '8rem',
  },
  teamBubble: {
    height: 8 * 12,
    borderRadius: '0.3rem 0 0 0.3rem',
    flexStretch: 0,
    fontSize: '3rem',
    marginBottom: '5rem',
    position: 'relative',
    transition: 'opacity .5s',
  },
  teamBubbleRight: {
    borderRadius: '0 0.3rem 0.3rem 0',
  },
  dimm: {
    opacity: 0.2,
  }
});

const generatePenalties = (classes, number) => {
  const items = [];
  for (let i = 0; i < number; i++) {
    items.push(<span key={i} className={classes.penalty}></span>);
  }
  return items;
};

class TeamDetails extends Component {
  static propTypes = {
    dimm: PropTypes.bool,
    team: Band.isRequired,
    hideScore: PropTypes.bool,
  }

  static defaultProps = {
    dimm: false,
    hideScore: false,
  }

  getTeamName (team) {
    const { name } = team.band
    return name.substr(0, 3).toUpperCase();
  }

  render() {
    const { classes, dimm, hideScore, side, team } = this.props;
    if (!team || !team.band.name) {
      return null;
    }
    return (
      <div
        className={classnames(classes.teamBubble, classes[camelCase(`teamBubble-${side}`)], {
          [classes.dimm]: dimm,
        })}
        style={{ backgroundColor: team.color }}
      >
        <div
          className={classnames(
            classes.nameBar,
            classes[camelCase(`nameBar-${side}`)]
          )}
        >
          <img
            className={classnames(classes.logo, classes[camelCase(`logo-${side}`)])}
            src={team.logo || TEAM_LOGO_DEFAULT}
            alt="Band logo"
          />
          <span
            className={classnames(classes.name, classes[camelCase(`name-${side}`)])}
          >{this.getTeamName(team)}</span>
          {hideScore
            ? null
            : <TeamScore score={team.score} backgroundColor={team.color} />}
          <span className={classnames(classes.penalties, classes[camelCase(`penalties-${side}`)])}>
            {generatePenalties(classes, team.penaltyPoints)}
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(TeamDetails);
