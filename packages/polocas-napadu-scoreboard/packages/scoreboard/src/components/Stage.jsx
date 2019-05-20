import React from 'react';
import isEqual from 'react-fast-compare';

export class Stage extends React.Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }
}
