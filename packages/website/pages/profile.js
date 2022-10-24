import React from 'react'

import { CommonLayout, TranslatedPage } from '../components/layout'
import { Profile } from '../components/profiles'
import { useTranslation } from 'next-i18next'

export default function ProfilePage({ slug }) {
  return (
    <CommonLayout>
      <Profile variables={{ slug }} />
    </CommonLayout>
  )
}
