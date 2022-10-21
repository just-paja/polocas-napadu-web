import Markdown from 'react-markdown'
import React from 'react'

import { ContentContainer } from '../layout'
import { gql } from 'apollo-boost'
import { Link } from '../bindings'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_ANCHORED_ARTICLE = gql`
  query GetAnchoredArticle($siteAnchor: String!) {
    anchoredArticle(siteAnchor: $siteAnchor) {
      description,
      name,
      slug,
    }
  }
`

function AnchoredArticleComponent ({ data, t }) {
  const { anchoredArticle } = data
  return (
    <ContentContainer column>
      <div>
        <h2>{anchoredArticle.name}</h2>
        <Markdown source={anchoredArticle.description} />
        <p>
          <Link route='article' params={{ slug: anchoredArticle.slug }}>
            <a>{t('continueReading')}</a>
          </Link>
        </p>
      </div>
    </ContentContainer>
  )
}

export const AnchoredArticle = withQuery({ query: QUERY_ANCHORED_ARTICLE })(
  withTranslation('common')(AnchoredArticleComponent)
)
