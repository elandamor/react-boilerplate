// Logo.spec.tsx
import React from 'react';
import { render } from 'react-testing-library';

import Logo from './index';

describe('Logo', () => {
  it('should render without crashing', () => {
    render(<Logo />);
  });
});
