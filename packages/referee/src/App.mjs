import React from 'react'

import { Apollo } from '@polocas-napadu/ui/apollo.mjs'
import { Routes, Route } from 'react-router'
import { HashRouter } from 'react-router-dom'
import { NotFound } from './components/NotFound.mjs'
import { RefereeView } from './components/RefereeView.mjs'

export const App = () => (
  <Apollo>
    <HashRouter>
      <Routes>
        <Route path="/match/:matchId" exact element={<RefereeView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </Apollo>
)
