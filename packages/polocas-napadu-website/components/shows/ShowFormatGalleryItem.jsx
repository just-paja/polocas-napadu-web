import Markdown from 'react-markdown'
import PropTypes from 'prop-types'
import React from 'react'
import styles from './ShowFormatGalleryItem.module.scss'

import { ContentContainer } from '../layout'
import { Image } from '../photos'
import { Link } from '../bindings'
import { ShowType } from 'polocas-napadu-core/proptypes'
import { withTranslation } from '../../lib/i18n'

function ShowFormatGalleryItemComponent ({ showFormat, t }) {
  return (
    <section className={styles.format}>
      <h2>
        <Link route='showFormatDetail' params={{ slug: showFormat.slug }}>
          <a>{showFormat.name}</a>
        </Link>
      </h2>
      <Link route='showFormatDetail' params={{ slug: showFormat.slug }}>
        <a>
          {showFormat.photos.length ? (
            <Image image={showFormat.photos[0].image} />
          ) : null}
        </a>
      </Link>
      <Markdown source={showFormat.shortDescription} />
    </section>
  )
}

ShowFormatGalleryItemComponent.propTypes = {
  data: PropTypes.shape({
    showTypeList: PropTypes.arrayOf(ShowType).isRequired
  })
}

export const ShowFormatGalleryItem = withTranslation(['common'])(
  ShowFormatGalleryItemComponent
)
