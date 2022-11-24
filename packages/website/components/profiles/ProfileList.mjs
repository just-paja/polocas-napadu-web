/* eslint-disable no-magic-numbers */

import React from 'react'
import classnames from 'classnames'
import styles from './ProfileList.module.scss'

import { Bulb } from '../logo.mjs'
import { formatName } from './names.mjs'
import { Link } from '../links.mjs'

const dummySequences = {
  dark: [0, 1, 2, 6, 7, 9, 11, 16, 17, 22, 27],
  secondary: [1, 2, 3, 4, 6, 5, 8, 10, 11, 13, 14, 21, 23, 25],
}
const primary = '#007120'
const defaultAvatar = '/static/pixmaps/holly.png'

function Circle({ profile, children, className, rotate }) {
  const props = {
    className,
    style: {
      transform: `rotate(${rotate}rad)`,
    },
  }
  if (profile) {
    const name = formatName(profile)
    props.style.backgroundImage = `linear-gradient(${primary}, ${primary}), url('${
      profile.avatar ? profile.avatar.src : defaultAvatar
    }')`
    return (
      <Link
        params={{ slug: profile.slug }}
        route="profile"
        {...props}
        title={name}
      >
        {children}
        {profile.avatar && (
          <span
            className={styles.profileOverlay}
            style={{
              backgroundImage: `url(${
                profile.avatar ? profile.avatar.src : null
              })`,
            }}
          />
        )}
        <span className={styles.seoName}>{name}</span>
      </Link>
    )
  }
  return <div {...props}>{children}</div>
}

export function ProfileListItem({ dark, profile, className, rotate }) {
  return (
    <Circle
      className={classnames(
        styles.circle,
        {
          [styles.dark]: dark,
          [styles.withProfile]: Boolean(profile),
          [styles.withoutProfile]: !profile,
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

function renderCircles(profiles) {
  return profiles.reduce((acc, profile, index) => {
    const rotate = Math.sin((index + 2) * 1.77 * Math.PI) * (index % 2 ? -1 : 1)
    const item = (
      <ProfileListItem key={profile.id} profile={profile} rotate={rotate} />
    )
    const result = [...acc]
    if (dummySequences.secondary.indexOf(index) !== -1) {
      result.push(
        <ProfileListItem
          key={`dummy-secondary-${index}`}
          rotate={-2.33 * Math.PI * rotate}
        />
      )
    }
    if (dummySequences.dark.indexOf(index) !== -1) {
      result.push(
        <ProfileListItem
          dark
          key={`dummy-dark-${index}`}
          rotate={3.7 * Math.PI * rotate}
        />
      )
    }
    result.push(item)
    return result
  }, [])
}

export const ProfileList = ({ group }) => renderCircles(group.profiles)
