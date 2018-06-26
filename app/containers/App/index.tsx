import classNames from 'classnames';
import React, { Component } from 'react';
import Measure from 'react-measure';
import { withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// Components
import ErrorBoundary from '../../components/ErrorBoundary';
import Routes from '../../components/Routes';
// Routes
import routes from './routes';
// Styles
import Wrapper from './styles';

export const breakpoints = (width) => {
  if (width < 600) {
    return 'v-xsmall';
  }
  if (width >= 600 && width < 1024) {
    return 'v-small';
  }
  if (width >= 1024 && width < 1440) {
    return 'v-medium';
  }
  if (width >= 1440 && width < 1920) {
    return 'v-large';
  }
  if (width >= 1920) {
    return 'v-xlarge';
  }
  return 'v-unknown';
};

/* tslint:disable:object-literal-sort-keys */
const themeDark = {
  isDark: true,
  palette: {
    bodyBackground: '#1F1F27',
    brandPrimary: '#25252D',
    cardBackground: '#25252D',
    cardBorderColor: '#414148',
  },
};

const themeLight = {
  isDark: false,
  palette: {
    bodyBackground: '#fafafa',
    brandPrimary: '#ffffff',
    cardBackground: '#ffffff',
    cardBorderColor: '#E4E6E9',
  },
};
/* tslint:enable:object-literal-sort-keys */

import { makeDebugger } from '../../lib';
const debug = makeDebugger('app');

/**
 * @render react
 * @name App container
 * @description The skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 */

class App extends Component<{}, IState> {
  protected componentIsMounted: boolean;

  constructor(props) {
    super(props);

    this.state = {
      bounds: {
        height: 0,
        width: 0,
      },
      theme: themeLight,
    };
  }

  public componentDidMount() {
    this.componentIsMounted = true;
  }

  public componentWillUnmount() {
    this.componentIsMounted = false;
  }

  public render() {
    const {
      bounds: { width },
    } = this.state;

    return (
      <ThemeProvider theme={this.state.theme}>
        <Measure
          bounds
          onResize={(contentRect) => {
            this.setState({ bounds: contentRect.bounds });
          }}
        >
          {({ measureRef }) => (
            <Wrapper
              className={classNames('c-app__container', breakpoints(width))}
              innerRef={measureRef}
            >
              <ErrorBoundary>
                <Routes routes={routes} />
              </ErrorBoundary>
            </Wrapper>
          )}
        </Measure>
      </ThemeProvider>
    );
  }
}

interface IState {
  bounds: {
    height: number;
    width: number;
  };
  theme: object;
}

export default withRouter(App);
