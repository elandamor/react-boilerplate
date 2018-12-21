import classNames from 'classnames';
import React, { Component, Suspense } from 'react';
import Measure from 'react-measure';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// Components
import { ErrorBoundary, LoadingBar, Routes } from '../../components';
// Contexts
import NetworkStatusProvider from '../../contexts/networkStatus.context';
// Routes
import routes from '../../routes';
// Styles
import GlobalStyles from '../../global-styles';
import Wrapper from './styles';

import { breakpoints, makeDebugger } from '../../utils';
const debug = makeDebugger('App');

const defaultTheme = {
  breakpoints: {
    small: '600px',
    medium: '1024px',
    large: '1440px',
    xLarge: '1920px',
  },
};

/* tslint:disable:object-literal-sort-keys */
const themeLight = {
  ...defaultTheme,
  isDark: false,
  palette: {
    bodyBackground: '#FAFAFA',
    brandPrimary: '#FFFFFF',
    cardBackground: '#FFFFFF',
    cardBorderColor: '#E4E6E9',
  },
};
/* tslint:enable:object-literal-sort-keys */

export interface IProps extends RouteComponentProps<any> {}

interface IState {
  bounds: {
    height: number;
    width: number;
  };
  theme: object;
}

/**
 * @render react
 * @name App container
 * @description The skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 */
class App extends Component<IProps, IState> {
  protected componentIsMounted: boolean;
  protected previousLocation: object;

  constructor(props: IProps) {
    super(props);

    this.state = {
      bounds: {
        height: 0,
        width: 0,
      },
      theme: themeLight,
    };

    this.previousLocation = props.location;
  }

  public componentDidMount() {
    this.componentIsMounted = true;
    debug('componentIsMounted');
  }

  public componentWillUpdate(nextProps: IProps) {
    const { location } = this.props;

    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }

  public componentWillUnmount() {
    this.componentIsMounted = false;
  }

  public setState(nextState: any, cb?: () => void) {
    if (this.componentIsMounted) {
      super.setState(nextState, cb);
    }
  }

  public render() {
    const { location } = this.props;
    const {
      bounds: { width },
    } = this.state;

    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    );

    return (
      <ThemeProvider theme={this.state.theme}>
        <NetworkStatusProvider>
          <Measure
            bounds
            onResize={(contentRect) => {
              this.setState({ bounds: contentRect.bounds });
            }}
          >
            {({ measureRef }) => (
              <Wrapper
                className={classNames('c-app__container', breakpoints(width))}
                // @ts-ignore
                ref={measureRef}
              >
                <GlobalStyles />
                <ErrorBoundary>
                  <Suspense fallback={<LoadingBar loading />}>
                    <Routes
                      location={isModal ? this.previousLocation : location}
                      routes={routes}
                    />
                  </Suspense>
                </ErrorBoundary>
              </Wrapper>
            )}
          </Measure>
        </NetworkStatusProvider>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
