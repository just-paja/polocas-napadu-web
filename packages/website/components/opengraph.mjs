import Head from 'next/head'
import React from 'react'

import { usePage } from '@polocas-napadu/core/context.mjs'

export const OgEvent = ({ event }) => (
  <Head>
    <meta property="og:type" content="event" />
    <meta property="og:event:start_time" content={event.start} />
    <meta property="og:event:end_time" content={event.end} />
  </Head>
)

export const OgImage = ({ src }) => (
  <Head>
    <meta property="og:image" content={`${usePage().origin}${src}`} />
  </Head>
)

export const OgUrl = () => (
  <Head>
    <meta property="og:url" content={usePage().url} />
  </Head>
)
