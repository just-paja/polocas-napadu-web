import React from 'react'

import { Article } from '../components/articles.mjs'
import { CommonLayout } from '../components/layout'
import { compose } from 'polocas-napadu-ui/decorators.mjs'
import { withPageProps } from '../pages.mjs'

export const getServerSideProps = compose(withPageProps)

export default function ArticlePage({ slug }) {
  return (
    <CommonLayout>
      <Article variables={{ slug }} />
    </CommonLayout>
  )
}
