import NotFound from './components/NotFound'
import React, { Component } from 'react'
import RefereeView from './components/RefereeView'

import { ApolloProvider } from 'react-apollo'
import { Switch, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'

class App extends Component {
  render () {
    const { client } = this.props
    return (
      <ApolloProvider client={client}>
        <HashRouter>
          <Switch>
            <Route path='/match/:matchId' exact component={RefereeView} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </ApolloProvider>
    )
  }
}

export default App
