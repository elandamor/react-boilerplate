/**
 * App
 */

import React from 'react';
// import PropTypes from 'prop-types';
// Styled-Components
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>React-Boilerplate</h1>
        <small>Built with love by Elandamor</small>
      </Wrapper>
    );
  }
}

App.propTypes = {

};

export default App;
