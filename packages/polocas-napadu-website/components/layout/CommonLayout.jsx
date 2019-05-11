import React from 'react'

import { Footer } from './Footer'
import { MainMenu } from './MainMenu'

import styles from './CommonLayout.scss'

export const CommonLayout = ({ children }) => (
  <React.Fragment>
    <MainMenu />
    <div className={styles.content}>
      {children}
    </div>
    <Footer />
  </React.Fragment>
)
