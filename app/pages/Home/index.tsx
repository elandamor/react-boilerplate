/**
 * Home
 */

import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
// Styles
import Wrapper from './styles';
import { Modal } from '../../components';

class Home extends PureComponent<{}, {}> {
  protected wrapper: any;

  public render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Modal defaultOpen trigger={<button>Modal</button>}>
          hello
        </Modal>
      </Wrapper>
    );
  }
}

export default Home;
