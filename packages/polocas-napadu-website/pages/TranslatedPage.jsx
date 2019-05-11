import React from 'react'

export class TranslatedPage extends React.Component {
  static getInitialProps () {
    return { namespacesRequired: ['common'] }
  }
}
