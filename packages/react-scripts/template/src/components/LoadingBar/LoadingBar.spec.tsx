// LoadingBar.spec.tsx
import * as React from 'react';
import { render } from 'react-testing-library';

import LoadingBar from './index';

describe('LoadingBar', () => {
  it('should render loading bar (loading)', () => {
    render(<LoadingBar />);
  });
});
