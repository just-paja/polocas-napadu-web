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
  render() {
    const { classes, hideScore } = this.props;
    const home = this.context.match.contestantGroups.find(group => group.contestantType === CONTESTANT_HOME);
    const guest = this.context.match.contestantGroups.find(group => group.contestantType === CONTESTANT_GUEST);
    return (
      <SplitView className={classes.split}>
        <TeamDetails team={home} hideScore={hideScore} side="left" />
        <TeamDetails team={guest} hideScore={hideScore} side="right" />
      </SplitView>
    );
  };
}

Teams.contextType = MatchContext;

Teams.propTypes = {
  classes: Classes.isRequired,
  hideScore: PropTypes.bool,
};

Teams.defaultProps = {
  hideScore: false,
};

export default withStyles(styles)(Teams);
