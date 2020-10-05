import Head from 'next/head'
import React, { useContext } from 'react'

import { UrlBase } from 'polocas-napadu-core/context'

export function OgImage ({ src }) {
  const urlBase = useContext(UrlBase)
  return (
    <Head>
      <meta property='og:image' content={`${urlBase.origin}${src}`} />
    </Head>
  )
}
