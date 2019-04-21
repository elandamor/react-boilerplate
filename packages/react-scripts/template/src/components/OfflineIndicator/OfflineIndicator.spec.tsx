// OfflineIndicator.spec.tsx
import * as React from 'react';
import { render } from 'react-testing-library';

import { ThemeProvider } from 'styled-components';

import OfflineIndicator from './index';
import theme from '../../theme';

describe('<OfflineIndicator />', () => {
  it('should render an offline indicator', () => {
    render(
      <ThemeProvider theme={theme}>
        <OfflineIndicator />
      </ThemeProvider>,
    );
  });
});
