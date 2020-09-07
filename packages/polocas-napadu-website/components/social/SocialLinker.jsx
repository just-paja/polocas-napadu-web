import Head from 'next/head'
import React, { useContext } from 'react'

import { UrlBase } from 'polocas-napadu-core/UrlBase'

export function SocialLinker () {
  const urlBase = useContext(UrlBase)
  return (
    <Head>
      <meta name='og:url' value={urlBase.url} />
    </Head>
  )
}
