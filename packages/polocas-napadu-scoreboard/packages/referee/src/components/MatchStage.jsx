import React from 'react';

import { Classes } from 'core/proptypes';
import { gql } from 'apollo-boost';
import { withStyles } from '@material-ui/core/styles';

import GraphContainer from './GraphContainer';

const styles = {
};

const GET_MATCH = gql`
  query Stage($matchId: Int!) {
    match(id: $matchId) {
      id,
      show {
        name,
        start,
      }
    }
  }

`;


const MatchStage = ({ classes, data }) => (
  <div>
    {data.match.id}
  </div>
);

MatchStage.propTypes = {
  classes: Classes.isRequired,
};

export default GraphContainer(
  withStyles(styles)(MatchStage),
  GET_MATCH
);
