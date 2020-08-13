import MatchStage from './MatchStage'
import React from 'react'

import { Match } from 'core/proptypes'
import { RouterContext } from 'core/context'

const RefereeView = ({ match }) => (
  <RouterContext.Provider value={match.params}>
    <MatchStage />
  </RouterContext.Provider>
)

RefereeView.propTypes = {
  match: Match.isRequired
}

export default RefereeView
