// Navigation.spec.tsx
import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Navigation from './index';

describe('<Navigation />', () => {
  it('should display a navigation component', () => {
    const component = renderer
      .create(
        <Router>
          <Navigation
            links={[
              { exact: true, href: '/', label: 'Home' },
              { href: '/about', label: 'About Us' },
            ]}
          />
        </Router>,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
