// Grid.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import 'whatwg-fetch';

import { ThemeProvider } from 'styled-components';

import Grid from './index';
import { themeLight } from '../../containers/App';

const theme = {
  ...themeLight,
};

describe('<Grid />', () => {
  it('should display a grid', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Grid columns={2}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Grid>
      </ThemeProvider>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
});
