import classnames from 'classnames'
import React from 'react'
import styles from './ProfileListItem.scss'

import { Bulb } from '../logo'
import { formatName } from './names'
import { Link } from '../bindings'

function Circle ({ profile, children, className, rotate }) {
  const props = {
    className,
    style: { transform: `rotate(${rotate}rad)` }
  }
  if (profile) {
    const name = formatName(profile)
    return (
      <Link params={{ slug: profile.slug }} route='profile'>
        <a {...props} title={name}>
          {children}
          <span className={styles.seoName}>{name}</span>
        </a>
      </Link>
    )
  }
  return <div {...props}>{children}</div>
}

export function ProfileListItem ({ dark, profile, rotate }) {
  return (
    <Circle
      className={classnames(styles.circle, {
        [styles.dark]: dark,
        [styles.withProfile]: Boolean(profile)
      })}
      profile={profile}
      rotate={rotate}
    >
      <Bulb className={styles.bulb} />
    </Circle>
  )
}
