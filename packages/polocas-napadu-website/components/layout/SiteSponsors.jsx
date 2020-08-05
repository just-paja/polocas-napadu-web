import PropTypes from 'prop-types'
import React from 'react'
import Row from 'react-bootstrap/Row'

import { gql } from 'apollo-boost'
import { SiteSponsorLogo } from './SiteSponsorLogo'
import { Sponsor } from '../proptypes'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const SITE_SPONSOR_LIST_QUERY = gql`
  query GetSiteSponsorList {
  siteSponsorList {
    id,
    name,
    logo,
    }
  }
`

const SiteSponsorsComponent = ({ data, t }) => {
  if (!data.siteSponsorList.length) {
    return null
  }

  return (
    <>
      <h4 className='text-center'>
        <strong>{t('coopWith')}</strong>
      </h4>
      <Row className='justify-content-center'>
        {data.siteSponsorList.map(sponsor => (
          <SiteSponsorLogo key={sponsor.id} sponsor={sponsor} />
        ))}
      </Row>
    </>
  )
}

SiteSponsorsComponent.propTypes = {
  data: PropTypes.shape({
    siteSponsorList: PropTypes.arrayOf(Sponsor).isRequired
  })
}

export const SiteSponsors = withTranslation(['common'])(withQuery({
  query: SITE_SPONSOR_LIST_QUERY
})(SiteSponsorsComponent))
