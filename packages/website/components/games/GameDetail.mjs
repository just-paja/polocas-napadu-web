import Head from 'next/head'
import Markdown from 'react-markdown'
import React from 'react'

import { Section, Heading } from 'polocas-napadu-ui/content.mjs'
import { Title } from '../meta.mjs'

export const GameDetail = ({ rules }) => (
  <Section>
    <Heading>
      {rules.name}
      <Title text={rules.name} />
      <Head>
        <meta property="og:description" content={rules.description} />
        <meta property="og:type" content="article" />
      </Head>
    </Heading>
    <Markdown source={rules.description} />
  </Section>
)
