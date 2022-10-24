import Head from 'next/head'
import Markdown from 'react-markdown'
import React from 'react'

import { Title } from '../meta.mjs'

const QUERY_FOUL_TYPE = `
  query FoulType($slug: String!) {
    foulType(slug: $slug) {
      name,
      description,
      slug,
    }
  }
`

export const FoulTypeDetail = ({ data }) => {
  const foulType = data.foulType
  return (
    <>
      <h1>
        {foulType.name}
        <Title text={foulType.name} />
        <Head>
          <meta property="og:description" content={foulType.description} />
          <meta property="og:type" content="article" />
        </Head>
      </h1>
      <Markdown source={foulType.description} />
    </>
  )
}
