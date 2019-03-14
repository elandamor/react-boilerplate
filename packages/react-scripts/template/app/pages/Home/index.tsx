import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';
import { Lottie } from '../../components';
import assets from '../../assets';

/**
 * @render react
 * @name Home page
 * @description Home page.
 */

interface IProps {
  className?: string;
}

interface IState {
  [key: string]: any;
}

class Home extends Component<IProps, IState> {
  state: IState = {};

  public render() {
    const { className } = this.props;

    return (
      <Wrapper className={classNames('', className)}>
        <Helmet>
          <title>React Boilerplate - Built with love by @elandamor</title>
          <meta name="description" content="Description of Home" />
        </Helmet>
        <Lottie
          animationData={assets.lottie.reactLogo}
          height={200}
          loop={false}
          width={200}
        />
      </Wrapper>
    );
  }
}

export default Home;
