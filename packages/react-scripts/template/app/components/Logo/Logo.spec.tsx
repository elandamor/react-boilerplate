// Logo.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import 'whatwg-fetch';

import { ThemeProvider } from 'styled-components';

import Logo from './index';
import { themeLight } from '../../containers/App';

const theme = {
  ...themeLight,
};

describe('<Logo />', () => {
  it('should display a logo', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Logo />
      </ThemeProvider>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
