import Head from 'next/head'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'

import { GameRules } from 'polocas-napadu-core/proptypes'
import { Title } from '../meta.mjs'
import { gql } from 'apollo-boost'
import { withQuery } from '../graphql.mjs'

const QUERY_GAME_RULES = gql`
  query GameRules($slug: String!) {
    gameRules(slug: $slug) {
      name
      description
      slug
    }
  }
`

const GameDetailComponent = ({ data, t }) => {
  const rules = data.gameRules
  return (
    <>
      <h1>
        {rules.name}
        <Title text={rules.name} />
        <Head>
          <meta property="og:description" content={rules.description} />
          <meta property="og:type" content="article" />
        </Head>
      </h1>
      <Markdown source={rules.description} />
    </>
  )
}

GameDetailComponent.propTypes = {
  data: PropTypes.shape({
    gameRules: GameRules.isRequired,
  }),
}

export const GameDetail = withQuery({ query: QUERY_GAME_RULES })(
  GameDetailComponent
)
