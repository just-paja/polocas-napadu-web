import classnames from 'classnames'
import React from 'react'
import styles from './PageHeading.module.scss'

import { Children } from 'polocas-napadu-core/proptypes'
import { ContentContainer } from './ContentContainer'

export function PageHeading ({ children }) {
  return (
    <div className={styles.heading}>
      <ContentContainer
        className={classnames(styles.center, styles.headingContainer)}
      >
        {children}
      </ContentContainer>
    </div>
  )
}

PageHeading.propTypes = {
  children: Children.isRequired
}
