/**
 * App
 */

import React from 'react';
import { hot } from 'react-hot-loader';
// import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
// Pages
import Home from '../../pages/Home/Loadable';
// Styled-Components
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} />
            )}
          />
        </Switch>
      </Wrapper>
    );
  }
}

App.propTypes = {

};

export default withRouter(hot(module)(App));
