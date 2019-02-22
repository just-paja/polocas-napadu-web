import React from 'react';

import { withNamespaces } from '../lib/i18n';
import { ShowDetail } from '../components/shows';

class ShowDetailPage extends React.Component {
  static getInitialProps({ query }) {
    console.log(query);
    return {
      namespacesRequired: ['common'],
      showId: query.showId,
    };
  }

  render() {
    const { showId } = this.props;
    console.log(this.props);
    return (
      <ShowDetail variables={{ showId }} />
    );
  }
}

export default withNamespaces(['common'])(ShowDetailPage);
