import React from 'react'
import Markdown from 'react-markdown'
import styles from './NgoContact.module.scss'

import { Heading, Section } from '@polocas-napadu/ui/content.mjs'
import { withTranslation } from '@polocas-napadu/ui/i18n.mjs'

const ListItem = ({ label, value }) => (
  <li>
    <div className={styles.label}>{label}:</div>{' '}
    <div className={styles.value}>{value}</div>
  </li>
)

export const NgoContact = withTranslation(({ t }) => (
  <Section className={styles.ngo}>
    <Heading>{t('ngoContact')}</Heading>
    <Markdown source={t('ngoContactText')} />
    <ul className={styles.details}>
      <ListItem label={t('identificationNumberCz')} value="05758661" />
      <ListItem label={t('bankAccountCz')} value="2501561542/2010" />
      <ListItem label={t('iban')} value="CZ0920100000002501561542" />
      <ListItem label={t('swift')} value="FIOBCZPPXXX" />
      <ListItem label={t('dataPostBox')} value="epwghq9" />
    </ul>
  </Section>
))
