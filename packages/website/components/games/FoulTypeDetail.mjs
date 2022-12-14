import Head from 'next/head'
import Markdown from 'react-markdown'
import React from 'react'

import { Section, Heading } from '@polocas-napadu/ui/content.mjs'
import { Title } from '../meta.mjs'

export const FoulTypeDetail = ({ foulType }) => (
  <Section>
    <Heading>
      {foulType.name}
      <Title text={foulType.name} />
      <Head>
        <meta property="og:description" content={foulType.description} />
        <meta property="og:type" content="article" />
      </Head>
    </Heading>
    <Markdown source={foulType.description} />
  </Section>
)
