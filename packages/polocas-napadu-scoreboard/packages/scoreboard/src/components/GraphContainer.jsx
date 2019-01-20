import React from 'react';

import { Query } from 'react-apollo';

const getComponentName = (component, defaultName) => (
  component.displayName ||
  component.name ||
  defaultName ||
  'Component'
);

const GraphContainer = (WrappedComponent, query) => {
  if (!WrappedComponent) {
    throw new Error('You must pass a Component.');
  }

  const wrappedName = getComponentName(WrappedComponent, 'Component')
  const GraphContainerNamed = ({ variables, ...props }) => (
    <Query query={query} variables={variables}>
      {({ loading, error, data}) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error!</div>;
        return <WrappedComponent data={data} variables={variables} {...props} />;
      }}
    </Query>
  );
  GraphContainerNamed.displayName = `GraphContainer(${wrappedName})`;
  return GraphContainerNamed;
};

export default GraphContainer;
