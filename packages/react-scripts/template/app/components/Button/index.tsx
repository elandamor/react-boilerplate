import React, { MouseEvent, SFC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

interface IProps {
  className?: string;
  onClick(e: MouseEvent<HTMLElement>): void;
  primary?: boolean;
  text?: string;
}

/**
 * @render react
 * @name Button component
 * @description Button component.
 * @example
 * <Button text="Test" />
 */

const Button: SFC<IProps> = ({
  className,
  onClick: handleClick,
  text
}) => (
  <Wrapper
    className={classNames('c-btn', className)}
    onClick={handleClick}
  >
    {text}
  </Wrapper>
);

export default Button;
