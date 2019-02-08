import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import React from 'react';

import { Classes } from 'core/proptypes';
import { gql } from 'apollo-boost';
import { MatchContext } from 'core/context';
import { Mutation } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';

import InspirationForm from './InspirationForm';

const styles = theme => ({
});

const ADD_AND_USE_INSPIRATION = gql`
  mutation AddAndUseInspiration($matchId: Int!, $inspirationText: String!) {
    addAndUseInspiration(matchId: $matchId, inspirationText: $inspirationText) {
      ok,
    }
  }
`;

class CustomInspirationDialog extends React.Component {
  constructor() {
    super();
    this.handleSaveSuccess = this.handleSaveSuccess.bind(this);
    this.state = {
      inspirationText: '',
    };
  }

  handleSaveSuccess(data) {
    this.props.onClose();
  }

  render() {
    const { open, onClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
      >
        <DialogTitle>
          Vlastní inspirace
        </DialogTitle>
        <DialogContent>
          <MatchContext.Consumer>
            {data => (
              <Mutation
                mutation={ADD_AND_USE_INSPIRATION}
                onCompleted={this.handleSaveSuccess}
                refetchQueries={['MatchStage']}
              >
                {(mutate, { loading, error }) => (
                  <InspirationForm
                    error={error}
                    onSubmit={(formData) => {
                      mutate({
                        variables: {
                          inspirationText: formData.inspiration,
                          matchId: data.match.id,
                        },
                      });
                    }}
                  />
                )}
              </Mutation>
            )}
          </MatchContext.Consumer>
        </DialogContent>
      </Dialog>
    );
  }
}

CustomInspirationDialog.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(CustomInspirationDialog);
