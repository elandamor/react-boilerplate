import React from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';
import { Lottie } from '../../components';
import assets from '../../assets';
import { FC } from 'react';

/**
 * @render react
 * @name Home page
 * @description Home page.
 */

interface IHomeProps {
  className?: string;
}

const Home: FC<IHomeProps> = (props) => {
  const { className } = props;

  return (
    <Wrapper className={classNames('', className)}>
      <Helmet title="React Boilerplate - Built with love by @elandamor" />
      <Lottie
        animationData={assets.lottie.reactLogo}
        height={200}
        loop={false}
        width={200}
      />
    </Wrapper>
  );
}

export default Home;
