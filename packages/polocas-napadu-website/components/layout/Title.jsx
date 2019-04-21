import React from 'react'
import PropTypes from 'prop-types'

import { propsTranslated } from '../proptypes'
import { withNamespaces } from '../../lib/i18n'

const TitleComponent = ({ pure, t, text }) => (
  <title>{pure ? text : `${text} - ${t('projectName')}`}</title>
)

TitleComponent.propTypes = {
  ...propsTranslated,
  pure: PropTypes.bool,
  text: PropTypes.string.isRequired
}

TitleComponent.defaultProps = {
  pure: false
}

export const Title = withNamespaces('navigation')(TitleComponent)
