/**
 * Home
 */

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// Styles
import Wrapper from './styles';

class Home extends Component<{}, {}> {
  protected wrapper: any;

  public render() {
    return (
      <Wrapper>
        <Helmet title="Home | react-boilerplate" />
      </Wrapper>
    );
  }
}

export default Home;
