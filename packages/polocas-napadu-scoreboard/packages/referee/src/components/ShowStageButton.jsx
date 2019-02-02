import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';

import { MatchContext } from 'core/context';
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

const getStageLabel = (stage) => {
  const option = STAGE_OPTIONS.find(option => option.value === stage);
  return option && option.label;
};

class ShowStageButton extends React.Component {
  render() {
    const { mutate, loading, classes, stage } = this.props;
    return (
      <div className={classes.wrapper}>
        <Button
          disabled={loading}
          onClick={() => !loading && mutate({
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
  }
}

ShowStageButton.contextType = MatchContext;

ShowStageButton.propTypes = {
  back: PropTypes.bool,
  stage: PropTypes.oneOf(STAGES).isRequired,
};

ShowStageButton.defaultProps = {
  back: false,
};

export default withStyles(styles)(ShowStageButton);
