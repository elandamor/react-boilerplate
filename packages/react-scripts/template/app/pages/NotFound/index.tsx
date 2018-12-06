import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

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
  state:IState = {}

  public render() {
    const { className } = this.props;

    return (
      <Wrapper className={classNames('', className)}>
        <Helmet>
          <title>NotFound</title>
          <meta name="description" content="Description of NotFound" />
        </Helmet>
      </Wrapper>
    );
  }
}

export default NotFound;
