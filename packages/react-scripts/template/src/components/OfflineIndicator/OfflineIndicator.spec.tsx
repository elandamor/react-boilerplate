// OfflineIndicator.spec.tsx
import * as React from 'react';
import { render } from 'react-testing-library';
import 'whatwg-fetch';

import { ThemeProvider } from 'styled-components';

import OfflineIndicator from './index';
import { THEME } from '../../global-styles';

describe('<OfflineIndicator />', () => {
  it('should render an offline indicator', () => {
    render(
      <ThemeProvider theme={THEME}>
        <OfflineIndicator />
      </ThemeProvider>,
    );
  });
});
