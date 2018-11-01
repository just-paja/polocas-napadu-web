import React, { Component } from 'react';

import { Provider } from 'react-redux';

import { Root } from './containers';

import './App.css';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
