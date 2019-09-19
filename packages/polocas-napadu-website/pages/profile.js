import React from 'react'

import { CommonLayout, TranslatedPage } from '../components/layout'
import { Profile } from '../components/profiles'
import { withTranslation } from '../lib/i18n'

class ProfilePage extends TranslatedPage {
  static getInitialProps (context) {
    const initialProps = super.getInitialProps(context)
    return {
      ...initialProps,
      slug: context.query.slug
    }
  }

  render () {
    const { slug } = this.props
    return (
      <CommonLayout>
        <Profile variables={{ slug }} />
      </CommonLayout>
    )
  }
}

export default withTranslation('common')(ProfilePage)
