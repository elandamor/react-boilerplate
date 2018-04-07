/**
 * Home
 */

import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
// Styles
import Wrapper from './styles';

class Home extends PureComponent {
  public render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
      </Wrapper>
    );
  }
}

export default Home;
