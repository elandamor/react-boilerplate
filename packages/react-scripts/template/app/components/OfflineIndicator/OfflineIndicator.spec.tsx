// OfflineIndicator.spec.tsx
import * as React from 'react';
import { render } from 'react-testing-library';
import 'whatwg-fetch';

import { ThemeProvider } from 'styled-components';

import OfflineIndicator from './index';
import { themeLight } from '../../containers/App';

const theme = {
  ...themeLight,
};

describe('<OfflineIndicator />', () => {
  it('should render an offline indicator', () => {
    render(
      <ThemeProvider theme={theme}>
        <OfflineIndicator />
      </ThemeProvider>
    );
  });
});
