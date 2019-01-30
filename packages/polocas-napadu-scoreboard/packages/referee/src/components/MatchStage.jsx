import React from 'react';

import { gql } from 'apollo-boost';
import { withStyles } from '@material-ui/core/styles';

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


const MatchStage = ({ classes, data }) => (
  <div>
    {data.id}
  </div>
);

MatchStage.propTypes = {
  classes: Classes.isRequired,
};

export default GraphContainer(
  withStyles(styles)(MatchStage),
  GET_MATCH
);
