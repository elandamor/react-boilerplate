import React, { SFC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name Avatar component
 * @description Avatar component.
 * @example
 * <Avatar />
 */

interface IProps {
  className?: string;
};

const Avatar: SFC<IProps> = ({ className }) => (
  <Wrapper className={classNames('c-avatar', className)} />
);

export default Avatar;
