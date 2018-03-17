/**
 * Home
 */

import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
// Components
import Input from '../../components/Input/Loadable';
// Styles
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends PureComponent {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Input id="name" label="Name" />
      </Wrapper>
    );
  }
}

export default Home;
