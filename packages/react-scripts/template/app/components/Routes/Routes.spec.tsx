// Routes.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import 'jest-styled-components';

import Routes from './index';
import routes from '../../routes';
import LoadingBar from '../LoadingBar';

describe('<Routes />', () => {
  it('should render Routes without crashing', () => {
    const component = renderer.create(
      <Router>
        <React.Suspense fallback={<LoadingBar />}>
          <Routes routes={routes} />
        </React.Suspense>
      </Router>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
