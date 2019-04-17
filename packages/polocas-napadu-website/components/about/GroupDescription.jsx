import React from 'react'
import Markdown from 'react-markdown'
import Typography from '@material-ui/core/Typography'

import { propsTranslated } from '../proptypes'
import { withNamespaces } from '../../lib/i18n'

const GroupDescriptionComponent = ({ t }) => (
  <section>
    <Typography variant='h1'>
      {t('group-description-heading')}
    </Typography>
    <Markdown source={t('group-description-perex')} />
  </section>
)

GroupDescriptionComponent.propTypes = propsTranslated

export const GroupDescription = withNamespaces(['about'])(GroupDescriptionComponent)
