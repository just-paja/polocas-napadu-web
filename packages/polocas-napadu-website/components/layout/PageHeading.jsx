import classnames from 'classnames'
import React from 'react'
import styles from './PageHeading.scss'

import { Children } from '../proptypes'
import { ContentContainer } from './ContentContainer'

export function PageHeading ({ children }) {
  return (
    <div className={styles.heading}>
      <ContentContainer className={classnames(styles.center, styles.headingContainer)}>
        {children}
      </ContentContainer>
    </div>
  )
}

PageHeading.propTypes = {
  children: Children.isRequired
}
