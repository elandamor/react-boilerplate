import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
// Components
import Routes from '../../components/Routes';
// Routes
import routes from './routes';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name App container
 * @description The skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar).
 */

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component<{}> {
  public render() {
    return (
      <Wrapper>
        <Switch>
          <Routes routes={routes} />
        </Switch>
      </Wrapper>
    );
  }
}

export default withRouter(App);
