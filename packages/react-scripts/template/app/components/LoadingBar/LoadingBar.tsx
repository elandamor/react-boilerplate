import React, { SFC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name LoadingBar component
 * @description LoadingBar component.
 * @example
 * <LoadingBar />
 */

interface IProps {
  className?: string;
  loading?: boolean;
}

const LoadingBar: SFC<IProps> = ({ className, loading }) => (
  <Wrapper
    className={classNames('c-loadingBar', className, {
      '-loading': loading,
    })}
  />
);

export default LoadingBar;
