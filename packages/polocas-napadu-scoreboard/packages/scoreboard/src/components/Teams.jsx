import PropTypes from 'prop-types';
import React from 'react';

import { Classes } from 'core/proptypes';
import { CONTESTANT_HOME, CONTESTANT_GUEST } from 'core/constants';
import { MatchContext } from 'core/context';
import { withStyles } from '@material-ui/core/styles';

import TeamDetails from './TeamDetails';

import { SplitView } from '../board/components';

const styles = {
  split: {
    width: '100%',
  },
};

class Teams extends React.Component {
  static contextType = MatchContext

  static propTypes = {
    classes: Classes.isRequired,
    hideScore: PropTypes.bool,
  }

  static defaultProps = {
    hideScore: false,
  }

  dimmTeam(contestantGroupId) {
    const { scorePointPoll } = this.context.match.currentStage;
    if (scorePointPoll) {
      return scorePointPoll.votings.some(voting => (
        voting.contestantGroup
        && voting.contestantGroup.id !== contestantGroupId
        && !voting.closed
      ));
    }
    return false;
  }

  getGroup(type) {
    return this.context.match.contestantGroups.find(group => group.contestantType === type);
  }

  render() {
    const { classes, hideScore } = this.props;
    const home = this.getGroup(CONTESTANT_HOME);
    const guest = this.getGroup(CONTESTANT_GUEST);
    return (
      <SplitView className={classes.split}>
        <TeamDetails
          dimm={this.dimmTeam(home.id)}
          hideScore={hideScore}
          side="left"
          team={home}
        />
        <TeamDetails
          dimm={this.dimmTeam(guest.id)}
          hideScore={hideScore}
          side="right"
          team={guest}
        />
      </SplitView>
    );
  };
}

export default withStyles(styles)(Teams);
