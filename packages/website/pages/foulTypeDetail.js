import React from 'react'
import styles from './showList.module.scss'

import { gql } from '@apollo/client'
import { CommonLayout, ContentContainer } from '../components/layout'
import { FoulTypeDetail } from '../components/games'
import { withPageProps } from '../pages.mjs'
import { compose, withQueryset } from '@polocas-napadu/ui/decorators.mjs'

const foulTypeQuery = gql`
  query FoulType($slug: String!) {
    foulType(slug: $slug) {
      name
      description
      slug
    }
  }
`

export const getServerSideProps = compose(
  withPageProps,
  withQueryset({
    shows: { query: foulTypeQuery },
  })
)

export default function FoulTypeDetailPage({ slug }) {
  return (
    <CommonLayout>
      <ContentContainer>
        <main className={styles.list}>
          <FoulTypeDetail variables={{ slug }} />
        </main>
      </ContentContainer>
    </CommonLayout>
  )
}
