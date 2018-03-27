/**
 * Home
 */

import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
// Styles
import Wrapper from './styles';
import Categories from '../../containers/GetCategories';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends PureComponent {
  public render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Categories />
      </Wrapper>
    );
  }
}

export default Home;
