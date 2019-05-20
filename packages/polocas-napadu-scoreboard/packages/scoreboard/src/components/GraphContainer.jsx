import React from 'react';

import { Query } from 'react-apollo';
import { RouterContext } from 'core/context';

const getComponentName = (component, defaultName) => (
  component.displayName ||
  component.name ||
  defaultName ||
  'Component'
);

const GraphContainer = (WrappedComponent, query, poll = false) => {
  if (!WrappedComponent) {
    throw new Error('You must pass a Component.');
  }

  const wrappedName = getComponentName(WrappedComponent, 'Component')
  class GraphContainerNamed extends React.Component {
    getPollInterval() {
      if (poll) {
        return 500;
      }
      return this.props.pollInterval || null;
    }

    render() {
      const { variables, ...props } = this.props;
      return (
        <Query
          query={query}
          pollInterval={this.getPollInterval()}
          variables={{
            ...variables,
            ...this.context,
          }}
        >
          {({ loading, error, data}) => {
            if (loading) return <div>Loading...</div>;
            if (error) return <div>Error!</div>;
            return <WrappedComponent data={data} variables={variables} {...props} />;
          }}
        </Query>
      );
    }
  }
  GraphContainerNamed.displayName = `GraphContainer(${wrappedName})`;
  GraphContainerNamed.contextType = RouterContext;
  return GraphContainerNamed;
};

export default GraphContainer;
