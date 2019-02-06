import React, { SFC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

export interface IProps {
  className?: string;
  loading?: boolean;
}

/**
 * @render react
 * @name LoadingBar component
 * @description LoadingBar component.
 * @example
 * <LoadingBar loading />
 */

const LoadingBar: SFC<IProps> = ({ className, loading }) => (
  <Wrapper
    className={classNames('c-loadingBar', className)}
    {...( loading ? { 'data-loading': true } : { 'data-loading': false } )}
  />
);

export default LoadingBar;
