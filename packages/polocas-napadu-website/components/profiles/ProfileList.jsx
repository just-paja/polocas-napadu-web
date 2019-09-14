import React from 'react'

import { ProfileListItem } from './ProfileListItem'
import { withPeopleGroup } from './withPeopleGroup'

const dummySequences = {
  dark: [0, 1, 2, 6, 7, 9, 11, 16, 17, 22, 27],
  secondary: [1, 2, 3, 4, 6, 5, 8, 10, 11, 13, 14, 21, 23, 25]
}

function renderCircles (profiles) {
  return profiles.reduce((acc, profile, index) => {
    const rotate = Math.sin((index + 2) * 1.77 * Math.PI) * (index % 2 ? -1 : 1)
    console.log(Math.PI)
    const item = (
      <ProfileListItem
        key={profile.id}
        profile={profile}
        rotate={rotate}
      />
    )
    const result = [...acc]
    if (dummySequences.secondary.indexOf(index) !== -1) {
      result.push(<ProfileListItem key={`dummy-secondary-${index}`} rotate={-2.33 * Math.PI * rotate} />)
    }
    if (dummySequences.dark.indexOf(index) !== -1) {
      result.push(<ProfileListItem dark key={`dummy-dark-${index}`} rotate={3.7 * Math.PI * rotate} />)
    }
    result.push(item)
    return result
  }, [])
}

const ProfileListComponent = ({ data }) => renderCircles(data.profileList)

export const ProfileList = withPeopleGroup({})(ProfileListComponent)
