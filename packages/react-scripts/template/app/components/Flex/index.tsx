import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

export interface IProps {
  className?: string;
  [key: string]: any;
}

/**
 * @render react
 * @name Flex component
 * @description Flex component.
 * @example
 *  <Flex />
 */

const Flex: FC<IProps> = ({ children, className, ...rest }) => (
  <Wrapper className={classNames('c-flex', className)} {...rest}>
    {children}
  </Wrapper>
);

export default Flex;
