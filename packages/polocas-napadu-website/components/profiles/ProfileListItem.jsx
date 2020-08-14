import classnames from 'classnames'
import React from 'react'
import styles from './ProfileListItem.module.scss'

import { Bulb } from '../logo'
import { formatName } from './names'
import { Link } from '../bindings'

const primary = '#007120'
const defaultAvatar = '/static/pixmaps/holly.png'

function Circle ({ profile, children, className, rotate }) {
  const props = {
    className,
    style: {
      transform: `rotate(${rotate}rad)`
    }
  }
  if (profile) {
    const name = formatName(profile)
    props.style.backgroundImage = `linear-gradient(${primary}, ${primary}), url('${profile.avatar ||
      defaultAvatar}')`
    return (
      <Link params={{ slug: profile.slug }} route='profile'>
        <a {...props} title={name}>
          {children}
          {profile.avatar && (
            <span
              className={styles.profileOverlay}
              style={{ backgroundImage: `url(${profile.avatar})` }}
            />
          )}
          <span className={styles.seoName}>{name}</span>
        </a>
      </Link>
    )
  }
  return <div {...props}>{children}</div>
}

export function ProfileListItem ({ dark, profile, className, rotate }) {
  return (
    <Circle
      className={classnames(
        styles.circle,
        {
          [styles.dark]: dark,
          [styles.withProfile]: Boolean(profile),
          [styles.withoutProfile]: !profile
        },
        className
      )}
      profile={profile}
      rotate={rotate}
    >
      {profile ? null : <Bulb className={styles.bulb} />}
    </Circle>
  )
}
