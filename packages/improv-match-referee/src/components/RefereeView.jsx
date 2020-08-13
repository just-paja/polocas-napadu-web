import MatchStage from './MatchStage'
import React from 'react'

import { Match } from 'polocas-napadu-core/proptypes'
import { RouterContext } from 'polocas-napadu-core/context'

const RefereeView = ({ match }) => (
  <RouterContext.Provider value={match.params}>
    <MatchStage />
  </RouterContext.Provider>
)

RefereeView.propTypes = {
  match: Match.isRequired
}

export default RefereeView
