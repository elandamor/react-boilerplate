import React, { FC } from 'react';
import classNames from 'classnames';
import { withRouter, RouteComponentProps } from 'react-router';
import { ArrowLeft } from 'react-feather';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('GoBackButton');

interface IProps extends RouteComponentProps {
  className?: string;
};

/**
 * @render react
 * @name GoBackButton component
 * @description GoBackButton component.
 * @example
 * <GoBackButton />
 */

const GoBackButton: FC<IProps> = ({ className, history, ...rest }) => (
  <Wrapper
    {...rest}
    className={classNames('c-btn--back', className)}
    icon={<ArrowLeft />}
    onClick={() => history.goBack()}
    iconOnly
  />
);

export default withRouter(GoBackButton);
