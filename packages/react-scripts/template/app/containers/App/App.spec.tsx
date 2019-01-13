// App.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import 'jest-styled-components';
import 'whatwg-fetch';

import App from './index';
import client from '../../apollo.config';

describe('<App />', () => {
  it('should render App without crashing', () => {
    const component = renderer.create(
      <ApolloProvider client={client}>
        <Router>
          <App />
        </Router>
      </ApolloProvider>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
