import Head from 'next/head'
import React from 'react'
import styles from './showList.module.scss'

import { gql } from '@apollo/client'
import { CommonLayout, ContentContainer } from '../components/layout'
import { Title } from '../components/meta.mjs'
import { FoulTypeList } from '../components/games'
import { withPageProps } from '../pages.mjs'
import {
  compose,
  withTranslation,
  withQueryset,
} from '@polocas-napadu/ui/decorators.mjs'

const foulTypeListQuery = gql`
  query FoulTypeList() {
    foulType {
      name
      description
      slug
    }
  }
`

export const getServerSideProps = compose(
  withPageProps,
  withQueryset({
    shows: { query: foulTypeListQuery },
  })
)

export default withTranslation(({ t }) => (
  <CommonLayout>
    <Title text={t('foulTypes')} />
    <Head>
      <meta property="og:description" content={t('foulTypesDescription')} />
      <meta property="og:type" content="article" />
    </Head>
    <ContentContainer>
      <main className={styles.list}>
        <h1>{t('foulTypes')}</h1>
        <p className="lead">{t('foulTypesDescription')}</p>
        <FoulTypeList />
      </main>
    </ContentContainer>
  </CommonLayout>
))
