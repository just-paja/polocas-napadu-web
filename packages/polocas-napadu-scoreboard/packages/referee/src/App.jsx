import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import NotFound from './components/NotFound';
import RefereeView from './components/RefereeView';

class App extends Component {
  render() {
    const { client } = this.props;
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Switch>
            <Route path="/match/:matchId" exact component={RefereeView} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
