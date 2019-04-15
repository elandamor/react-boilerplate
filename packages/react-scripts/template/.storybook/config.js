import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles, { THEME } from '../src/global-styles';

const req = require.context('../src', true, /.stories.tsx/);

addDecorator((story) => (
  <ThemeProvider theme={THEME}>
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
