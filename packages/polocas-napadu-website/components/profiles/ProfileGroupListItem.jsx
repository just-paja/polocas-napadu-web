import React from 'react'

import { ProfileList } from './ProfileList'

export const ProfileGroupListItem = ({ group }) => (
  <ProfileList variables={{ group: group.id }} />
)
