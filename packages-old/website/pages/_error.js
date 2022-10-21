import PropTypes from 'prop-types'
import React from 'react'

import { CommonLayout } from '../components/layout'
import { NotFound, UnknownError } from '../components/errors'
import { withTranslation } from '../lib/i18n'

class Error extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number
  }

  static defaultProps = {
    statusCode: null
  }

  static getInitialProps (context) {
    let statusCode = null
    if (context) {
      if (context.res) {
        statusCode = context.res.statusCode
      } else if (context.err) {
        statusCode = context.err.statusCode
      }
    }
    return {
      namespacesRequired: ['common', 'error'],
      statusCode
    }
  }

  renderErrorContent () {
    const { statusCode } = this.props
    if (statusCode === 404) {
      return <NotFound />
    }
    return <UnknownError />
  }

  render () {
    return (
      <CommonLayout center flex>
        {this.renderErrorContent()}
      </CommonLayout>
    )
  }
}

export default withTranslation('error')(Error)
