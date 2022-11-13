import React from 'react'

import { Apollo } from 'polocas-napadu-ui/apollo.mjs'
import { HashRouter } from 'react-router-dom'
import { MatchList } from './components/MatchList.mjs'
import { NotFound } from './components/NotFound.mjs'
import { Routes, Route } from 'react-router'
import { SpectatorView } from './components/SpectatorView.mjs'

export const App = () => (
  <Apollo>
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<MatchList />} />
        <Route path="/match/:matchId" exact element={<SpectatorView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </Apollo>
)
