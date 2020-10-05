import Head from 'next/head'
import React from 'react'

export function OgEvent ({ event }) {
  return (
    <Head>
      <meta property='og:type' content='event' />
      <meta property='og:event:start_time' content={event.start} />
      <meta property='og:event:end_time' content={event.end} />
    </Head>
  )
}
