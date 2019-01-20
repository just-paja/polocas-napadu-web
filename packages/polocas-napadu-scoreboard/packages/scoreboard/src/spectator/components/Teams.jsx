import PropTypes from 'prop-types';
import React from 'react';

import { gql } from 'apollo-boost';
import { withStyles } from '@material-ui/core/styles';

import TeamDetails from './TeamDetails';
import GraphContainer from '../../components/GraphContainer';

import { SplitView } from '../../board/components';
import { Classes } from '../../proptypes';

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
`


const Teams = ({ classes, hideScore }) => (
  <SplitView className={classes.split}>
    asdf
    // <TeamDetails hideScore={hideScore} side="left" />
    // <TeamDetails hideScore={hideScore} side="right" />
  </SplitView>
);

Teams.propTypes = {
  classes: Classes.isRequired,
  hideScore: PropTypes.bool,
};

Teams.defaultProps = {
  hideScore: false,
};

export default GraphContainer(withStyles(styles)(Teams), GET_MATCH_TEAMS);
