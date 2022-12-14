import React from 'react'

import { CommonLayout } from '../../components/layout'
import { compose, withQueryset } from '@polocas-napadu/ui/decorators.mjs'
import { gql } from '@apollo/client'
import { ShowFormatDetail } from '../../components/shows/ShowFormatDetail.mjs'
import { showFormatQuery } from '../../graphql.mjs'
import { withPageProps } from '../../pages.mjs'

export const getServerSideProps = compose(
  withPageProps,
  withQueryset({
    show: { query: gql(showFormatQuery) },
  }),
  props => props
)

export default ({ showList, showType }) => {
  return (
    <CommonLayout>
      <ShowFormatDetail showList={showList} showType={showType} />
    </CommonLayout>
  )
}
