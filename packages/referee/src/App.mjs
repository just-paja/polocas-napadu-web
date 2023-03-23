import React from 'react'

import { Routes, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { NotFound } from './components/NotFound.mjs'
import { RefereeView } from './components/RefereeView.mjs'

export const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/match/:matchId" exact element={<RefereeView />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </HashRouter>
)
