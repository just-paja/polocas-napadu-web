import Head from 'next/head'
import React, { useContext } from 'react'

import { UrlBase } from 'polocas-napadu-core/context'

export function OgUrl () {
  const urlBase = useContext(UrlBase)
  return (
    <Head>
      <meta property='og:url' value={urlBase.url} />
    </Head>
  )
}
