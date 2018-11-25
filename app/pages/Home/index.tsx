/**
 * Home
 */

import React, { Component } from 'react';
// import { Helmet } from 'react-helmet';
// Components
import { LoadingBar } from '../../components';
// Styles
import Wrapper from './styles';

// For debugging only.
// import { makeDebugger } from '../../lib';
// const debug = makeDebugger('Home');

class Home extends Component<{}, {}> {
  public render() {
    return (
      <Wrapper>
        <LoadingBar loading />
      </Wrapper>
    );
  }
}

export default Home;
