import React from 'react'
import styles from './showList.module.scss'

import { GameDetail } from '../components/games'
import { CommonLayout, ContentContainer } from '../components/layout'

export default ({ slug }) => (
  <CommonLayout>
    <ContentContainer>
      <main className={styles.list}>
        <GameDetail variables={{ slug }} />
      </main>
    </ContentContainer>
  </CommonLayout>
)
