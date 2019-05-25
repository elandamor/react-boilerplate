import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/global-styles';
import theme from '../src/theme';

const req = require.context('../src', true, /.stories.tsx/);

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <GlobalStyles />
      {story()}
    </React.Fragment>
  </ThemeProvider>
));

function loadStories() {
  req.keys().forEach((file) => req(file));
}

configure(loadStories, module);
