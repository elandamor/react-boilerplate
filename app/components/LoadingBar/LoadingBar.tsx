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
}

const LoadingBar: SFC<IProps> = ({ className }) => (
  <Wrapper className={classNames('c-loadingBar', className)} />
);

LoadingBar.defaultProps = {
  className: '',
};

export default LoadingBar;
