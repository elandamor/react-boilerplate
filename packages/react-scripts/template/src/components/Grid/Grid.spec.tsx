// Grid.spec.tsx
import * as React from 'react';
import { render } from 'react-testing-library';

import { ThemeProvider } from 'styled-components';

import Grid from './index';
import theme from '../../theme';

describe('Grid', () => {
  it('should display a grid', () => {
    render(
      <ThemeProvider theme={theme}>
        <Grid columns={2}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </Grid>
      </ThemeProvider>,
    );
  });
});
