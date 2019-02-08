import React from 'react';

import { gql } from 'apollo-boost';
import { Mutation } from 'react-apollo';
import { MatchContext } from 'core/context';

import InspirationForm from './InspirationForm';
import InspirationSaved from './InspirationSaved';

const ADD_INSPIRATION = gql`
  mutation AddInspiration($showId: Int!, $inspirationText: String!) {
    addInspiration(showId: $showId, inspirationText: $inspirationText) {
      ok,
    }
  }
`;

class InsertInspiration extends React.Component {
  constructor() {
    super();
    this.handleContinue = this.handleContinue.bind(this);
    this.handleSaveSuccess = this.handleSaveSuccess.bind(this);
    this.state = { saved: false };
  }

  handleContinue() {
    this.setState({ saved: false });
  }

  handleSaveSuccess() {
    this.setState({ saved: true });
  }

  render() {
    if (this.state.saved) {
      return <InspirationSaved onContinue={this.handleContinue} />
    }
    return (
      <MatchContext.Consumer>
        {data => (
          <Mutation
            mutation={ADD_INSPIRATION}
            onCompleted={this.handleSaveSuccess}
          >
            {(mutate, { loading, error }) => (
              <InspirationForm
                onSubmit={(formValue) => mutate({
                  refetchQueries: ['MatchStage'],
                  variables: {
                    inspirationText: formValue.inspiration,
                    showId: data.match.show.id,
                  },
                })}
                error={error}
                saving={loading}
              />
            )}
          </Mutation>
        )}
      </MatchContext.Consumer>
    );
  }
}

export default InsertInspiration;
