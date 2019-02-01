import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';

import { gql } from 'apollo-boost';
import { MatchContext } from 'core/context';
import { Mutation } from 'react-apollo';
import { STAGES } from 'core/constants';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    display: 'inline-flex',
    position: 'relative',
  },
});

const CHANGE_STAGE = gql`
  mutation ChangeStage($matchId: Int!, $stage: String!) {
    changeMatchStage(matchId: $matchId, stage: $stage) {
      ok,
    }
  }
`;

class StageButton extends React.Component {
  render() {
    const { classes, stage } = this.props;
    return (
      <Mutation mutation={CHANGE_STAGE}>
        {(changeStage, { error, loading }) => {
          return (
            <div className={classes.wrapper}>
              <Button
                disabled={loading}
                onClick={() => changeStage({
                  refetchQueries: ['MatchStage'],
                  variables: {
                    matchId: this.context.match.id,
                    stage,
                  },
                })}
              >{stage}</Button>
              {loading && <CircularProgress
                size={24}
                className={classes.buttonProgress}
              />}
            </div>
          );
        }}
      </Mutation>
    );
  }
}

StageButton.contextType = MatchContext;

StageButton.propTypes = {
  stage: PropTypes.oneOf(STAGES).isRequired,
};

export default withStyles(styles)(StageButton);
