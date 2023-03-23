import React from 'react'

import { HashRouter } from 'react-router-dom'
import { MatchList } from './components/MatchList.mjs'
import { NotFound } from './components/NotFound.mjs'
import { Routes, Route } from 'react-router'
import { SpectatorView } from './components/SpectatorView.mjs'

export const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" exact element={<MatchList />} />
      <Route path="/match/:matchId" exact element={<SpectatorView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
)
