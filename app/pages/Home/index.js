/**
 * Home
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';
import Wrapper from './styles';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.PureComponent {
  render() {
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

Home.propTypes = {

};

export default Home;
