import PropTypes from 'prop-types'
import React from 'react'
import styles from './SiteSponsors.scss'

import { gql } from 'apollo-boost'
import { SiteSponsorLogo } from './SiteSponsorLogo'
import { Sponsor } from '../proptypes'
import { withQuery } from '../graphql'
import { withTranslation } from '../../lib/i18n'

const SITE_SPONSOR_LIST_QUERY = gql`
  query GetSiteSponsorList {
    siteSponsorList {
      id
      name
      logo
      website
    }
  }
`

const SiteSponsorsComponent = ({ data, t }) => {
  if (!data.siteSponsorList.length) {
    return null
  }

  return (
    <div className={styles.sponsors}>
      <h4 className='text-center'>
        <strong>{t('coopWith')}</strong>
      </h4>
      <div className='d-flex justify-content-center'>
        {data.siteSponsorList.map(sponsor => (
          <SiteSponsorLogo key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </div>
  )
}

SiteSponsorsComponent.propTypes = {
  data: PropTypes.shape({
    siteSponsorList: PropTypes.arrayOf(Sponsor).isRequired
  })
}

export const SiteSponsors = withTranslation(['common'])(
  withQuery({
    query: SITE_SPONSOR_LIST_QUERY
  })(SiteSponsorsComponent)
)
