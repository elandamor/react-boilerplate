/**
 * Home
 */

import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
// Styles
import Wrapper from './styles';

class Home extends PureComponent<{}, {}> {
  protected wrapper: any;

  public render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </Wrapper>
    );
  }
}

export default Home;
