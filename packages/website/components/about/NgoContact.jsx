import React from 'react'
import Markdown from 'react-markdown'

import { propsTranslated } from 'polocas-napadu-core/proptypes'
import { withTranslation } from '../../lib/i18n'

export const NgoContactComponent = ({ t }) => (
  <>
    <Markdown source={t('ngoContactText')} />
    <ul>
      <li>{t('identificationNumberCz')}: 5758661</li>
      <li>{t('bankAccountCz')}: 2501561542/2010</li>
      <li>{t('iban')}: CZ0920100000002501561542</li>
      <li>{t('swift')}: FIOBCZPPXXX</li>
      <li>{t('dataPostBox')}: epwghq9</li>
    </ul>
  </>
)

NgoContactComponent.propTypes = propsTranslated
NgoContactComponent.displayName = 'NgoContact'

export const NgoContact = withTranslation(['common'])(NgoContactComponent)
