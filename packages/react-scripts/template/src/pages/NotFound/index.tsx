import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
// Styles
import { Inner, Page, Modal } from '@app/components';
import { H2 } from '@app/typography';

import { makeDebugger } from '@app/utils';
const debug = makeDebugger('NotFound');

interface INotFoundProps extends RouteComponentProps {}

/**
 * @render react
 * @name NotFound page
 * @description 404 page.
 */

const NotFound = (props: INotFoundProps) => {
  return (
    <Page>
      <Helmet>
        <title>NotFound</title>
        <meta name="description" content="Description of NotFound" />
      </Helmet>
      <Inner p={2}>
        <H2 mb={0}>Oops!</H2>
        <Modal
          trigger={<p>The page you're looking for doesn't exist.</p>}
          fullscreen={false}
          defaultOpen={false}
        />
      </Inner>
    </Page>
  );
}

export default NotFound;
