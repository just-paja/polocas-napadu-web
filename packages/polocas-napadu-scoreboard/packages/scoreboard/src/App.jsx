import React, { Component } from 'react';

import { Provider } from 'react-redux';

import { Editor } from './editor/containers';
import { OpenSpectatorWindowButton } from './spectator/containers';

import './App.css';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div className="App">
          <Editor />
          <OpenSpectatorWindowButton />
        </div>
      </Provider>
    );
  }
}

export default App;
