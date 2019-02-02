import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';

import { gql } from 'apollo-boost';
import { MatchContext } from 'core/context';
import { Mutation } from 'react-apollo';
import { STAGES, STAGE_OPTIONS } from 'core/constants';
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

const REWIND_STAGE = gql`
  mutation RewindStage($matchId: Int!) {
    rewindMatchStage(matchId: $matchId) {
      ok,
    }
  }
`;

const getStageLabel = (stage) => {
  const option = STAGE_OPTIONS.find(option => option.value === stage);
  return option && option.label;
};

class StageButton extends React.Component {
  render() {
    const { back, classes, stage } = this.props;
    return (
      <Mutation mutation={back ? REWIND_STAGE : CHANGE_STAGE}>
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
              >{getStageLabel(stage)}</Button>
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
  back: PropTypes.bool,
  stage: PropTypes.oneOf(STAGES).isRequired,
};

StageButton.defaultProps = {
  back: false,
};

export default withStyles(styles)(StageButton);
