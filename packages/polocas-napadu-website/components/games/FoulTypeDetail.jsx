import Head from 'next/head'
import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'

import { FoulType } from '../proptypes'
import { Title } from '../layout'
import { gql } from 'apollo-boost'
import { withQuery } from '../graphql'

const QUERY_FOUL_TYPE = gql`
  query FoulType($slug: String!) {
    foulType(slug: $slug) {
      name,
      description,
      slug,
    }
  }
`

const FoulTypeDetailComponent = ({ data, t }) => {
  const foulType = data.foulType
  return (
    <>
      <h1>
        {foulType.name}
        <Title text={foulType.name} />
        <Head>
          <meta property='og:description' content={foulType.description} />
          <meta property='og:type' content='article' />
        </Head>
      </h1>
      <Markdown source={foulType.description} />
    </>
  )
}

FoulTypeDetailComponent.propTypes = {
  data: PropTypes.shape({
    foulType: FoulType.isRequired
  })
}

export const FoulTypeDetail = withQuery({ query: QUERY_FOUL_TYPE })(FoulTypeDetailComponent)
