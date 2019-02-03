import PropTypes from 'prop-types';
import React from 'react';

import { MatchContext } from 'core/context';
import { STAGES, STAGE_GAME, STAGE_OPTIONS } from 'core/constants';

import InteractiveButton from './InteractiveButton';

const getStageLabel = (stage) => {
  const option = STAGE_OPTIONS.find(option => option.value === stage);
  return option && option.label;
};

const isStageReady = (stage, currentStage) => {
  if (stage === STAGE_GAME) {
    return Boolean(currentStage.game);
  }
  return true;
};

const ShowStageButton = ({ mutate, loading, classes, stage }) => (
  <MatchContext.Consumer>
    {context => (
      <InteractiveButton
        loading={loading}
        disabled={!isStageReady(stage, context.match.currentStage)}
        onClick={() => mutate({
          refetchQueries: ['MatchStage'],
          variables: {
            matchId: context.match.id,
            stage,
          },
        })}
      >{getStageLabel(stage)}</InteractiveButton>
    )}
  </MatchContext.Consumer>
);

ShowStageButton.propTypes = {
  back: PropTypes.bool,
  stage: PropTypes.oneOf(STAGES).isRequired,
};

ShowStageButton.defaultProps = {
  back: false,
};

export default ShowStageButton;
