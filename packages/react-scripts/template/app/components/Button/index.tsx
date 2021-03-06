import React, { MouseEvent, SFC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name Button component
 * @description Button component.
 * @example
 * <Button />
 */

interface IProps {
  className?: string;
  primary?: boolean;
  onClick(e: MouseEvent<HTMLElement>): void;
}

const Button: SFC<IProps> = ({ children, className, onClick: handleClick }) => (
  <Wrapper className={classNames('c-btn', className)} onClick={handleClick}>
    {children}
  </Wrapper>
);

export default Button;
