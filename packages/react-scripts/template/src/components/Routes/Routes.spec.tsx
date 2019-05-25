// Routes.spec.tsx
import React from 'react';
import { render } from 'react-testing-library';
import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './index';
import routes from '../../routes';
import LoadingBar from '../LoadingBar';

describe('Routes', () => {
  it('should render app routes without crashing', () => {
    render(
      <Router>
        <React.Suspense fallback={<LoadingBar />}>
          <Routes routes={routes} />
        </React.Suspense>
      </Router>,
    );
  });
});
