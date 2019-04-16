import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';
import { H3, Inner, GoBackButton } from '../../components';

/**
 * @render react
 * @name NotFound page
 * @description NotFound page.
 */

interface IProps {
  className?: string;
}

interface IState {
  [key: string]: any;
}

class NotFound extends Component<IProps, IState> {
  state: IState = {};

  public render() {
    const { className } = this.props;

    return (
      <Wrapper className={classNames('', className)}>
        <Helmet>
          <title>NotFound</title>
          <meta name="description" content="Description of NotFound" />
        </Helmet>
        <Inner p={3}>
          <GoBackButton m={-2} />
          <H3 mb={0}>Oops!</H3>
          <p>The page you're looking for doesn't exist.</p>
        </Inner>
      </Wrapper>
    );
  }
}

export default NotFound;
