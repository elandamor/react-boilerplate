import classNames from 'classnames';
import React, { Component } from 'react';
import Measure from 'react-measure';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// Components
import { ErrorBoundary, Routes } from '../../components';
// Routes
import routes from './routes';
// Styles
import Wrapper from './styles';

export const breakpoints = (width: number) => {
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
const themeLight = {
  isDark: false,
  palette: {
    bodyBackground: '#FAFAFA',
    brandPrimary: '#FFFFFF',
    cardBackground: '#FFFFFF',
    cardBorderColor: '#E4E6E9',
  },
};
/* tslint:enable:object-literal-sort-keys */

// import { makeDebugger } from '../../lib';
// const debug = makeDebugger('App');

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
                <Routes
                  location={isModal ? this.previousLocation : location}
                  routes={routes}
                />
              </ErrorBoundary>
            </Wrapper>
          )}
        </Measure>
      </ThemeProvider>
    );
  }
}

export default withRouter(App);
