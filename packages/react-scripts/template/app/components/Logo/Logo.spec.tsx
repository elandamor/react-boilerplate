// Logo.spec.tsx
import React from 'react';
import { render } from 'react-testing-library';
import 'whatwg-fetch';

import { ThemeProvider } from 'styled-components';

import Logo from './index';
import { themeLight } from '../../containers/App';

const theme = {
  ...themeLight,
};

describe('Logo', () => {
  it('should render a logo', () => {
    const { container: { firstChild: logoNode } } = render(
      <ThemeProvider theme={theme}>
        <Logo />
      </ThemeProvider>
    );

    expect(logoNode).toBeDefined();
  });
});
