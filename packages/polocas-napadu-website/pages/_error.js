import PropTypes from 'prop-types'
import React from 'react'

import { withNamespaces } from '../lib/i18n'

import { NotFound, UnknownError } from '../components/errors'

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

  render () {
    const { statusCode } = this.props
    if (statusCode === 404) {
      return <NotFound />
    }
    return <UnknownError />
  }
}

export default withNamespaces('error')(Error)
