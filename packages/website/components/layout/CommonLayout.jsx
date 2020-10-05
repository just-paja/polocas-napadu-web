import PropTypes from 'prop-types'
import classnames from 'classnames'
import React from 'react'

import { Children } from 'polocas-napadu-core/proptypes'
import { Footer } from './Footer'
import { MainMenu } from './MainMenu'

import styles from './CommonLayout.module.scss'

export function CommonLayout ({ center, children, flex }) {
  return (
    <>
      <MainMenu />
      <div
        className={classnames(styles.content, {
          [styles.center]: center,
          [styles.flex]: flex
        })}
      >
        {children}
      </div>
      <Footer />
    </>
  )
}

CommonLayout.propTypes = {
  center: PropTypes.bool,
  children: Children.isRequired,
  flex: PropTypes.bool
}

CommonLayout.defaultProps = {
  center: false,
  flex: false
}
