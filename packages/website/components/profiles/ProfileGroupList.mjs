import React from 'react'
import styles from './ProfileGroupList.module.scss'

import { ContentContainer } from '../layout/ContentContainer.mjs'
import { ProfileList } from './ProfileList.mjs'
import { withTranslation } from 'polocas-napadu-ui/i18n.mjs'

export const ProfileGroupList = withTranslation(({ groups, t }) => (
  <section className={styles.block} id={t('membersAnchor')}>
    <ContentContainer className={styles.container}>
      <h2 className={styles.heading}>{t('members')}</h2>
      <div className={styles.list}>
        {groups.map(group => (
          <ProfileList group={group} />
        ))}
      </div>
    </ContentContainer>
  </section>
))
