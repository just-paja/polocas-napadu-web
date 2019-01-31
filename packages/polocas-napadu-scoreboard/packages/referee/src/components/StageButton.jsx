import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';

import { gql } from 'apollo-boost';
import { MatchContext } from 'core/context';
import { Mutation } from 'react-apollo';
import { STAGES } from 'core/constants';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

const CHANGE_STAGE = gql`
  mutation ChangeStage($matchId: Int!, $stage: String!) {
    changeStage(id: $matchId, stage: $stage) {
      id,
    }
  }
`;

class StageButton extends React.Component {
  render() {
    const { stage } = this.props;
    return (
      <Mutation mutation={CHANGE_STAGE}>
        {(changeStage, { error, loading }) => {
          return (
            <Button
              disabled={loading}
              onClick={() => changeStage({
                variables: {
                  matchId: this.context.match.id,
                  stage,
                },
              })}
            >{stage}</Button>
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
