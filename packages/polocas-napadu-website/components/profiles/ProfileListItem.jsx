import classnames from 'classnames'
import React from 'react'
import styles from './ProfileListItem.scss'

import { Link } from '../bindings'
import { Bulb } from '../logo'

function Circle ({ profile, children, className, rotate }) {
  const props = {
    className,
    style: { transform: `rotate(${rotate}rad)` }
  }
  if (profile) {
    return <Link params={{ slug: profile.slug }} route='profile'><a {...props}>{children}</a></Link>
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
