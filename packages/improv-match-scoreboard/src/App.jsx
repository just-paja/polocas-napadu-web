import MatchList from './components/MatchList'
import NotFound from './components/NotFound'
import React from 'react'
import SpectatorView from './components/SpectatorView'

import { ApolloProvider } from 'react-apollo'
import { Switch, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'

class App extends React.Component {
  render () {
    const { client } = this.props
    return (
      <ApolloProvider client={client}>
        <HashRouter>
          <Switch>
            <Route path='/' exact component={MatchList} />
            <Route path='/match/:matchId' exact component={SpectatorView} />
            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </ApolloProvider>
    )
  }
}

export default App
