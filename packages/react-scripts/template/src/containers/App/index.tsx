import React, { Suspense, useEffect, useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
// Components
import { ErrorBoundary, LoadingBar, Routes } from '../../components';
// Contexts
import NetworkStatusProvider from '../../contexts/networkStatus.context';
// Routes
import routes from '../../routes';
// Styles
import GlobalStyles, { THEME } from '../../global-styles';
import Wrapper from './styles';

// import { breakpoints, makeDebugger } from '../../utils';
// const debug = makeDebugger('App');

export interface IAppProps extends RouteComponentProps {}

/**
 * @render react
 * @name App container
 * @description The skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 */

const App = (props: IAppProps) => {
  const [previousLocation, setPreviousLocation] = useState(props.location);

  const isModal = !!(
    props.location.state &&
    props.location.state.modal &&
    previousLocation !== props.location
  );

  useEffect(() => {
    const { history, location } = props;

    if (
      history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      setPreviousLocation(props.location);
    }
  }, [])

  return (
    <ThemeProvider theme={THEME}>
      <NetworkStatusProvider>
        <Wrapper>
          <Normalize />
          <GlobalStyles />
          <ErrorBoundary>
            <Suspense fallback={<LoadingBar loading />}>
              <Routes
                location={isModal ? previousLocation : location}
                routes={routes}
              />
            </Suspense>
          </ErrorBoundary>
        </Wrapper>
      </NetworkStatusProvider>
    </ThemeProvider>
  );
}

export default withRouter(App);
