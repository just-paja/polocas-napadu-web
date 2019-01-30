import React from 'react';

import { gql } from 'apollo-boost';
import { withStyles } from '@material-ui/core/styles';

import MatchStage from './MatchStage';
import GraphContainer from './GraphContainer';

import { Classes } from 'core/proptypes';

const styles = {
};

const GET_MATCH = gql`
  query Match($id: Int!) {
    match {
      id,
      show {
        name,
        start,
      }
    }
  }

`;


const RefereeView = ({ classes, params }) => (
  <div>
    <MatchStage variables={{ matchId: 1 }}/>
  </div>
);

RefereeView.propTypes = {
  classes: Classes.isRequired,
};

export default GraphContainer(
  withStyles(styles)(RefereeView),
  GET_MATCH
);
