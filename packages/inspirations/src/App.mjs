import Container from 'react-bootstrap/Container'
import React from 'react'

import { Apollo } from 'polocas-napadu-ui/apollo.mjs'
import { FixedDialog } from 'polocas-napadu-ui/FixedDialog.mjs'
import { HashRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import { ShowInspirations } from './ShowInspirations.mjs'
import { ShowList } from './ShowList.mjs'

export const App = () => {
  return (
    <FixedDialog>
      <Container>
        <Apollo>
          <HashRouter>
            <Routes>
              <Route path="/:showId" exact element={<ShowInspirations />} />
              <Route path="*" element={<ShowList />} />
            </Routes>
          </HashRouter>
        </Apollo>
      </Container>
    </FixedDialog>
  )
}
