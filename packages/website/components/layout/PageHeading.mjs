import classnames from 'classnames'
import React from 'react'
import styles from './PageHeading.module.scss'

import { Children } from 'polocas-napadu-core/proptypes'
import { ContentContainer } from './ContentContainer.mjs'

const BackgroundBlur = ({ children, image }) => {
  const style = image
    ? {
        aspectRatio: image.width / image.height,
        backgroundImage: `url(${image.src})`,
      }
    : null
  return (
    <div className={styles.blurContainer}>
      <div
        className={classnames({ [styles.backdrop]: image })}
        style={style}
      ></div>
      <div className={classnames({ [styles.background]: image })} style={style}>
        {children}
      </div>
    </div>
  )
}

export function PageHeading({
  backgroundImage,
  children,
  className,
  ...props
}) {
  return (
    <div {...props} className={classnames(styles.heading, className)}>
      <BackgroundBlur image={backgroundImage}>
        <ContentContainer
          className={classnames(styles.center, styles.headingContainer)}
        >
          {children}
        </ContentContainer>
      </BackgroundBlur>
    </div>
  )
}

PageHeading.propTypes = {
  children: Children.isRequired,
}
