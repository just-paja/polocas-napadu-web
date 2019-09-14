import PropTypes from 'prop-types'
import React from 'react'

import { gql } from 'apollo-boost'
import { UsualPlaceProp } from '../proptypes'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const QUERY_HOME_STAGES = gql`
  query GetHomeStages($placeType: Int!) {
    usualPlaceList(placeType: $placeType) {
      description,
      id,
      location {
        name,
        address,
      },
      name,
    }
  }
`

function formatPlace (place) {
  return place.location.name
}

const HomeStageNoticeComponent = ({ data, t }) => {
  if (!data.usualPlaceList.length) {
    return null
  }

  return (
    <p>
      {t('usualHomeStages', { places: data.usualPlaceList.map(formatPlace).join(',') })}
    </p>
  )
}

HomeStageNoticeComponent.propTypes = {
  data: PropTypes.shape({
    usualPlaceList: PropTypes.arrayOf(UsualPlaceProp).isRequired
  }),
  t: PropTypes.func.isRequired
}

export const HomeStageNotice = withTranslation(['common'])(withQuery({
  query: QUERY_HOME_STAGES,
  variables: { placeType: 1 }
})(HomeStageNoticeComponent))
