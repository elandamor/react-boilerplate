import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, RouteComponentProps } from 'react-router-dom';

import { Lottie, Page } from '@app/components';
import assets from '@app/assets';

/**
 * @render react
 * @name Home page
 * @description Landing page for the web app.
 */

interface IHomeProps extends RouteComponentProps {}

const Home = (props: IHomeProps) => {
  return (
    <Page>
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
    </Page>
  );
}

export default Home;
