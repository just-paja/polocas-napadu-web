import PropTypes from 'prop-types'
import React from 'react'
import ShowStageButton from './ShowStageButton'

import { gql } from 'apollo-boost'
import { MatchContext } from 'core/context'
import { Mutation } from 'react-apollo'

const CHANGE_STAGE = gql`
  mutation ChangeStage($matchId: Int!, $stage: String!) {
    changeMatchStage(matchId: $matchId, stage: $stage) {
      ok,
    }
  }
`

const REWIND_STAGE = gql`
  mutation RewindStage($matchId: Int!) {
    rewindMatchStage(matchId: $matchId) {
      ok,
    }
  }
`

class ShowStageControl extends React.Component {
  render () {
    const { component: Component, back, ...other } = this.props
    return (
      <Mutation mutation={back ? REWIND_STAGE : CHANGE_STAGE}>
        {(changeStage, { error, loading }) => (
          <Component
            back={back}
            matchId={this.context.match.id}
            mutate={changeStage}
            {...other}
          />
        )}
      </Mutation>
    )
  }
}

ShowStageControl.contextType = MatchContext

ShowStageControl.propTypes = {
  back: PropTypes.bool,
  component: PropTypes.func
}

ShowStageControl.defaultProps = {
  back: false,
  component: ShowStageButton
}

export default ShowStageControl
