import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'

import { Link } from '../bindings'
import { ShowType } from '../proptypes'
import { withTranslation } from '../../lib/i18n'

function ShowFormatGalleryItemComponent ({ showFormat, t }) {
  return (
    <>
      <h2>
        <Link route='showFormatDetail' params={{ slug: showFormat.slug }}>
          <a>{showFormat.name}</a>
        </Link>
      </h2>
      <Markdown source={showFormat.shortDescription} />
    </>
  )
}

ShowFormatGalleryItemComponent.propTypes = {
  data: PropTypes.shape({
    showTypeList: PropTypes.arrayOf(ShowType).isRequired
  })
}

export const ShowFormatGalleryItem = withTranslation(['common'])(ShowFormatGalleryItemComponent)
