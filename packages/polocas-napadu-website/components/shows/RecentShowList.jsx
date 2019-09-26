import PropTypes from 'prop-types'
import React from 'react'

import { List } from '../layout'
import { Show } from '../proptypes'
import { BriefShowListItem } from './BriefShowListItem'
import { withShowList } from './withShowList'
import { withTranslation } from '../../lib/i18n'

const RecentShowListComponent = ({ data, t }) => {
  if (!data.showList.length) {
    return null
  }
  return (
    <>
      <h2>{t('recentShows')}</h2>
      <List>
        {data.showList.map(show => (
          <BriefShowListItem key={show.id} show={show} />
        ))}
      </List>
    </>
  )
}

RecentShowListComponent.propTypes = {
  data: PropTypes.shape({
    showList: PropTypes.arrayOf(Show).isRequired
  })
}

export const RecentShowList = withTranslation(['common'])(withShowList({ limit: 5, past: true })(RecentShowListComponent))
