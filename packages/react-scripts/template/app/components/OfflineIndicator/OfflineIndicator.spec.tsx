// OfflineIndicator.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import 'whatwg-fetch';

import { ThemeProvider } from 'styled-components';

import OfflineIndicator from './index';
import { themeLight } from '../../containers/App';

const theme = {
  ...themeLight,
};

describe('<OfflineIndicator />', () => {
  it('should display an offline indicator', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <OfflineIndicator />
      </ThemeProvider>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
