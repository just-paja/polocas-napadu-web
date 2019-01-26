import PropTypes from 'prop-types';
import React from 'react';

import { gql } from 'apollo-boost';
import { withStyles } from '@material-ui/core/styles';

import TeamDetails from './TeamDetails';
import GraphContainer from '../../components/GraphContainer';

import { SplitView } from '../../board/components';
import { Classes } from '../../proptypes';
import { CONTESTANT_HOME, CONTESTANT_GUEST } from '../../constants';

const styles = {
  split: {
    width: '100%',
  },
};

const GET_MATCH_TEAMS = gql`
  query Stage($matchId: Int!) {
    match(id: $matchId) {
      contestantGroups {
        contestantType,
        band {
          name,
        }
      }
    }
  }
`;

const Teams = ({ classes, data, hideScore }) => {
  const home = data.match.contestantGroups.find(group => group.contestantType === CONTESTANT_HOME);
  const guest = data.match.contestantGroups.find(group => group.contestantType === CONTESTANT_GUEST);
  return (
    <SplitView className={classes.split}>
      <TeamDetails team={home.band} hideScore={hideScore} side="left" />
      <TeamDetails team={guest.band} hideScore={hideScore} side="left" />
    </SplitView>
  );
};

Teams.propTypes = {
  classes: Classes.isRequired,
  hideScore: PropTypes.bool,
};

Teams.defaultProps = {
  hideScore: false,
};

export default GraphContainer(withStyles(styles)(Teams), GET_MATCH_TEAMS, true);
