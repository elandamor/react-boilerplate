// LoadingBar.spec.tsx
import * as React from 'react';
import { render } from 'react-testing-library';

import LoadingBar from './index';

describe('LoadingBar', () => {
  it('should render loading bar (not loading)', () => {
    // TODO: Check for <data-loading=false>
    render(<LoadingBar />);
  });

  it('should render loading bar (loading)', () => {
    // TODO: Check for <data-loading=true>
    render(<LoadingBar loading />);
  });
});
