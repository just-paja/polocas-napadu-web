import React from 'react'

import { Apollo } from 'polocas-napadu-ui/apollo.mjs'
import { Container } from 'react-bootstrap'
import { FixedDialog } from 'polocas-napadu-ui/FixedDialog.mjs'
import { HashRouter } from 'react-router-dom'
import { NotFound } from './NotFound.mjs'
import { Routes, Route } from 'react-router'
import { ShowInspirations } from './ShowInspirations.mjs'

export const App = () => {
  return (
    <FixedDialog>
      <Container>
        <Apollo>
          <HashRouter>
            <Routes>
              <Route
                path="/match/:matchId"
                exact
                element={<ShowInspirations />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </HashRouter>
        </Apollo>
      </Container>
    </FixedDialog>
  )
}
