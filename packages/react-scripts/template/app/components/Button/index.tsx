import React, { MouseEvent, FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

interface IProps {
  className?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  text?: string;
}

/**
 * @render react
 * @name Button component
 * @description Defines a clickable button.
 * @example
 * <Button text="Test" />
 */

const Button: FC<IProps> = ({
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

Button.defaultProps = {
  onClick: () => null,
};

export default Button;
