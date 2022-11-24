import Error from 'next/error'
import Head from 'next/head'
import React from 'react'

import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'
import { useRouter } from 'next/router'

export const MetaBase = () => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta key="viewport" name="viewport" content="width=device-width" />
      <meta key="og:type" property="og:type" content="website" />
      <link rel="icon" href="/favicon.png" />
    </Head>
  )
}

export const MetaPage = ({ description, title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta key="og:title" property="og:title" content={title} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
      <meta key="description" property="description" content={description} />
    </Head>
  )
}

export const MetaUrl = ({ noRobots, url }) => (
  <Head>
    <meta key="og:url" property="og:url" content={url} />
    {noRobots && <meta key="robots" name="robots" content="noindex" />}
  </Head>
)

export const Title = withTranslation(({ pure, t, text, description }) => (
  <Head>
    <title>{pure ? text : `${text} - ${t('projectName')}`}</title>
    <meta property="og:title" content={text} />
    <meta property="og:site_name" content={t('projectName')} />
    <meta property="og:description" content={description} />
    <meta name="description" content={description} />
  </Head>
))

const BAD_REQUEST = 400

export const asPage = PageComp =>
  function MetaPageWrapper({ noRobots, statusCode, ...props }) {
    const router = useRouter()
    if (statusCode >= BAD_REQUEST) {
      return <Error statusCode={statusCode} />
    }
    return (
      <>
        <MetaUrl
          noRobots={noRobots}
          url={`${props.baseUrl}${router.pathname}`}
        />
        <PageComp {...props} />
      </>
    )
  }
