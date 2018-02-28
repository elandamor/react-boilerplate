/**
 * Home
 */

import React from 'react';
import { Helmet } from 'react-helmet';
// import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
      </div>
    );
  }
}

Home.propTypes = {

};

export default Home;
