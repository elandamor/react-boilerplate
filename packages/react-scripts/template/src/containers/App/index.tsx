import React, { Suspense } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import get from 'lodash/get';
import merge from 'lodash/merge';
// Components
import { ErrorBoundary, Header, LoadingBar, Routes } from '@app/components';
// Contexts
import NetworkStatusProvider from '@app/contexts/networkStatus.context';
// Routes
import routes from '@app/routes';
// Styles
import { Wrapper } from './styles';

import GlobalStyles from '@app/global-styles';

import baseTheme from '@app/theme';
import { useDarkMode } from '@app/hooks';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('App');

export interface IAppProps extends RouteComponentProps {}

export const AppContext = React.createContext({});

/**
 * @render react
 * @name App container
 * @description The skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 */

const App = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  // Merge the color mode with the base theme to create a new theme object
  const getTheme = (mode: string) => merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
    isDark: true,
  })

  const theme = darkMode ? getTheme('dark') : baseTheme;

  return (
    <ThemeProvider theme={theme}>
      <NetworkStatusProvider>
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
          <Wrapper>
            <Normalize />
            <GlobalStyles />
            <ErrorBoundary>
              <Header alignItems="center" flex="none" />
            </ErrorBoundary>
            <ErrorBoundary>
              <Suspense fallback={<LoadingBar />}>
                <Routes routes={routes} />
              </Suspense>
            </ErrorBoundary>
          </Wrapper>
        </AppContext.Provider>
      </NetworkStatusProvider>
    </ThemeProvider>
  );
}

export default withRouter(App);
