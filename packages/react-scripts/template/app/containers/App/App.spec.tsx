// App.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-styled-components';

import App from './index';

describe('<App />', () => {
  it('should render App without crashing', () => {
    const component = renderer.create(
      <Router>
        <App />        
      </Router>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
