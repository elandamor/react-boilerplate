import React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';
// Styles
import Wrapper from './styles';
import { H2, Inner } from '../../components';

/**
 * @render react
 * @name NotFound page
 * @description 404 page.
 */

interface INotFoundProps extends RouteComponentProps {}

const NotFound = (props: INotFoundProps) => {
  return (
    <Wrapper>
      <Helmet>
        <title>NotFound</title>
        <meta name="description" content="Description of NotFound" />
      </Helmet>
      <Inner p={3}>
        <H2 mb={0}>Oops!</H2>
        <p>The page you're looking for doesn't exist.</p>
      </Inner>
    </Wrapper>
  );
}

export default NotFound;
