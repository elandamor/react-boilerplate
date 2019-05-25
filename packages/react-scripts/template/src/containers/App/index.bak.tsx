import React, { Suspense } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import get from 'lodash/get';
import merge from 'lodash/merge';
import { useTransition } from 'react-spring';
// Components
import { ErrorBoundary, Header, LoadingBar, Routes, AnimatedWrapper } from '@app/components';
// Contexts
import NetworkStatusProvider from '@app/contexts/networkStatus.context';
// Routes
import routes from '@app/routes';
// Styles
import { Wrapper } from './styles';

import GlobalStyles from '@app/global-styles';

import baseTheme from '@app/theme';
import { useDarkMode, useRouter } from '@app/hooks';

// import { makeDebugger } from '@app/utils';
// const debug = makeDebugger('App');

export interface IAppProps extends RouteComponentProps {}

/**
 * @render react
 * @name App container
 * @description The skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 */

const App = () => {
  const { location } = useRouter();
  const [darkMode] = useDarkMode();

  // Merge the color mode with the base theme to create a new theme object
  const getTheme = (mode: string) => merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
    isDark: true,
  })

  const theme = darkMode ? getTheme('dark') : baseTheme;

  const pageTransitions = useTransition(location, location => location.pathname, {
    from: { transform: 'translateY(100px)', opacity: 0 },
    enter: { transform: 'translateY(0)', opacity: 1 },
    leave: { transform: 'translateY(100px)', opacity: 0 },
  })

  return (
    <ThemeProvider theme={theme}>
      <NetworkStatusProvider>
        <Wrapper>
          <Normalize />
          <GlobalStyles />
          <ErrorBoundary>
            <Header alignItems="center" flex="none" />
          </ErrorBoundary>
          {
            pageTransitions.map(({ item, props, key }) => (
              <AnimatedWrapper key={key} style={props}>
                <ErrorBoundary>
                  <Suspense fallback={<LoadingBar />}>
                    <Routes routes={routes} location={item} />
                  </Suspense>
                </ErrorBoundary>
              </AnimatedWrapper>
            ))
          }
        </Wrapper>
      </NetworkStatusProvider>
    </ThemeProvider>
  );
}

export default withRouter(App);
