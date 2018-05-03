import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
// Components
import Routes from '../../components/Routes';
// Libraries
import { makeDebugger, matchMedia } from '../../lib';
// Routes
import routes from './routes';
// Styles
import Wrapper from './styles';

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

const debug = makeDebugger('app');

const mql648 = matchMedia('(min-width: 648px)');

/**
 * @render react
 * @name App container
 * @description The skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 */

class App extends Component<{}, IState> {
  constructor(props) {
    super(props);

    this.state = {
      mq648: false,
      mql648,
      theme: themeLight,
    };
  }

  public componentDidMount() {
    mql648.addListener(this.mediaQueryChanged);
    this.setState({
      mq648: mql648.matches,
      mql648,
    });
  }

  public componentWillUnmount() {
    // tslint:disable-next-line:no-shadowed-variable
    const { mql648 } = this.state;

    if (mql648) {
      mql648.removeListener(this.mediaQueryChanged);
    }
  }

  public mediaQueryChanged = () => {
    this.setState({
      mq648: this.state.mql648.matches,
    });
  }

  public render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Wrapper>
          <Switch>
            <Routes routes={routes} />
          </Switch>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

interface IState {
  mq648: boolean;
  mql648: {
    addListener: (func) => void,
    matches: false,
    removeListener: (func) => void,
  };
  theme: object;
}

export default withRouter(App);
