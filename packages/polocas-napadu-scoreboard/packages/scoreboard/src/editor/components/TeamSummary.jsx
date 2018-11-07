import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import PropTypes from 'prop-types';
import EditTeamButton from '../containers/EditTeamButton';
import Typography from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import TeamScoreControls from '../containers/TeamScoreControls';

import { Classes } from '../../proptypes';

import * as constants from '../../board/constants';

const styles = theme => ({
  logo: {
    marginRight: '1rem',
    maxHeight: '2rem',
  },
  teamName: {
    marginTop: 0,
  },
  props: {
    marginLeft: -3 * theme.spacing.unit,
  },
});

const TeamSummary = ({
  classes,
  team,
  teamId,
}) => (
  <div className={classes.team}>
    <Typography variant="display1">
      <img
        alt="Team logo"
        className={classes.logo}
        src={team.logo || constants.TEAM_LOGO_DEFAULT}
      />
      {team.name}
    </Typography>
    <List className={classes.props}>
      <ListItem><ListItemText>Score: {team.score}</ListItemText></ListItem>
      <ListItem><ListItemText>Penalty points: {team.penalties}</ListItemText></ListItem>
    </List>
    <TeamScoreControls teamId={teamId} />
    <EditTeamButton teamId={teamId} />
  </div>
);

TeamSummary.propTypes = {
  classes: Classes.isRequired,
  team: PropTypes.shape({
    name: PropTypes.string,
    logo: PropTypes.string,
  }).isRequired,
};

export default withStyles(styles)(TeamSummary);
