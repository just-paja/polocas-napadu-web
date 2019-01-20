import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import { MatchList, NotFound } from './components';
import { SpectatorView } from './spectator/components';

class App extends Component {
  render() {
    const { client } = this.props;
    return (
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route path="/" exact component={MatchList} />
            <Route path="/match/:matchId" exact component={SpectatorView} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
