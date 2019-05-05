import React, { Suspense } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import get from 'lodash/get';
import merge from 'lodash/merge';
// Components
import { ErrorBoundary, Header, LoadingBar, Routes } from 'components';
// Contexts
import NetworkStatusProvider from 'contexts/networkStatus.context';
// Routes
import routes from 'routes';
// Styles
import GlobalStyles from '../../global-styles';
import Wrapper from './styles';

import { useDarkMode } from 'hooks';
import baseTheme from '../../theme';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('App');

export interface IAppProps extends RouteComponentProps {}

/**
 * @render react
 * @name App container
 * @description The skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 */

const App = () => {
  const [darkMode] = useDarkMode();

  // Merge the color mode with the base theme to create a new theme object
  const getTheme = (mode: string) => merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
    isDark: true,
  })

  const theme = darkMode ? getTheme('dark') : baseTheme;

  return (
    <ThemeProvider theme={theme}>
      <NetworkStatusProvider>
        <Wrapper>
          <Normalize />
          <GlobalStyles />
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          <ErrorBoundary>
            <Suspense fallback={<LoadingBar />}>
              <Routes routes={routes} />
            </Suspense>
          </ErrorBoundary>
        </Wrapper>
      </NetworkStatusProvider>
    </ThemeProvider>
  );
}

export default withRouter(App);
