import IconButton from '@material-ui/core/IconButton';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import React from 'react';

import { Classes } from 'core/proptypes';
import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  box: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 3,
  }
});

const CHANGE_SCORE = gql`
  mutation ChangeScore($contestantGroupId: Int!, $subtract: Boolean) {
    randomPickInspiration(contestantGroupId: $contestantGroupId, subtract: $subtract) {
      ok,
    }
  }
`;

const ScoreControls = ({ classes, contestantGroupId }) => (
  <Mutation mutation={CHANGE_SCORE}>
    {(mutate, { loading }) => (
      <div className={classes.box}>
        <IconButton
          onClick={() => mutate({
            refetchQueries: ['MatchStage'],
            variables: {
              contestantGroupId,
              subtract: false,
            },
          })}
        >
          <Add />
        </IconButton>
        <IconButton
          onClick={() => mutate({
            refetchQueries: ['MatchStage'],
            variables: {
              contestantGroupId,
              subtract: true,
            },
          })}
        >
          <Remove />
        </IconButton>
      </div>
    )}
  </Mutation>
);

ScoreControls.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(ScoreControls);
