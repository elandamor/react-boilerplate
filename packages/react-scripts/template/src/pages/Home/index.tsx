import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, RouteComponentProps } from 'react-router-dom';
// Styles
import Wrapper from './styles';
import { Lottie } from '../../components';
import assets from '../../assets';

/**
 * @render react
 * @name Home page
 * @description Landing page for the web app.
 */

interface IHomeProps extends RouteComponentProps {}

const Home = (props: IHomeProps) => {
  return (
    <Wrapper>
      <Helmet title="React Boilerplate - Built with love by @elandamor" />
      <Link
        to={{
          pathname: '/about',
          state: {
            showBackButton: true,
          }
        }}
      >
        <Lottie
          animationData={assets.lottie.reactLogo}
          height={200}
          loop={false}
          width={200}
        />
      </Link>
    </Wrapper>
  );
}

export default Home;
