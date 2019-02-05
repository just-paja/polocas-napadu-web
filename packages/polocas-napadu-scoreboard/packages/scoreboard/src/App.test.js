import React from 'react';
import ReactDOM from 'react-dom';

import { mockClient } from 'core/mock/apollo';

import App from './App';

describe('app', () => {
  it('renders without crashing', () => {
    const { client } = mockClient();
    const div = document.createElement('div');
    ReactDOM.render(<App client={client} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
