import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import { Switch, Route } from 'react-router';
import { HashRouter } from 'react-router-dom';

import NotFound from './components/NotFound';
import RefereeView from './components/RefereeView';

class App extends Component {
  render() {
    const { client } = this.props;
    return (
      <ApolloProvider client={client}>
        <HashRouter>
          <Switch>
            <Route path="/match/:matchId" exact component={RefereeView} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </ApolloProvider>
    );
  }
}

export default App;
