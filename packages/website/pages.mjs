import getConfig from 'next/config'

import { apolloClient } from '@polocas-napadu/ui/apollo-next.mjs'
import { gql } from '@apollo/client'
import { mergeQueryResults, stripData } from '@polocas-napadu/ui/apollo.mjs'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations.js'
import { sponsorsQuery } from './graphql.mjs'

const { publicRuntimeConfig } = getConfig()

const origin = `https://${publicRuntimeConfig.baseDomain}`
const defaultLang = publicRuntimeConfig.defaultLang
const determineLocale = locale =>
  !locale || locale === 'default' ? defaultLang : locale

const getSponsors = async () =>
  stripData(await apolloClient.query({ query: gql(sponsorsQuery) }))

export const withPageProps = fn => async props => {
  const locale = determineLocale(props.locale)
  return fn({
    ...props,
    props: {
      ...props.props,
      origin,
      baseUrl: `${origin}/${locale}`,
      lang: locale,
      ...mergeQueryResults(
        await Promise.all([getSponsors(), serverSideTranslations(locale)])
      ),
    },
  })
}
