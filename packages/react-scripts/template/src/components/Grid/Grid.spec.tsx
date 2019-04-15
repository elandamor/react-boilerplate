// Grid.spec.tsx
import * as React from 'react';
import { cleanup, render } from 'react-testing-library';
import 'whatwg-fetch';

import { ThemeProvider } from 'styled-components';

import Grid from './index';
import { THEME } from '../../global-styles';

afterEach(cleanup);

describe('Grid', () => {
  it('should display a grid', () => {
    render(
      <ThemeProvider theme={THEME}>
        <Grid columns={2}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Grid>
      </ThemeProvider>,
    );
  });
});