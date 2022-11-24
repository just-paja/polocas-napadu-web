import React from 'react'

import { CommonLayout } from '../components/layout/CommonLayout.mjs'
import { Profile } from '../components/profiles/Profile.mjs'

export default function ProfilePage({ slug }) {
  return (
    <CommonLayout>
      <Profile variables={{ slug }} />
    </CommonLayout>
  )
}
