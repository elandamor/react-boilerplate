import React, { MouseEvent, FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

export interface IButtonProps {
  backgroundColor?: string;
  className?: string;
  disabled?: boolean;
  icon?: any;
  iconPosition?: string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  text?: string;
  textColor?: string;
  // types
  outlined?: boolean;
  raised?: boolean;
}

/**
 * @render react
 * @name Button component
 * @description Defines a clickable button.
 * @example
 * <Button text="Test" />
 */

const Button: FC<IButtonProps> = ({
  className,
  onClick: handleClick,
  text,
  ...rest
}) => (
  <Wrapper
    className={classNames('c-btn', className)}
    onClick={handleClick}
    {...rest}
  >
    {rest.icon && rest.iconPosition !== 'right' && <i>{rest.icon}</i>}
    <label>{text}</label>
    {rest.icon && rest.iconPosition === 'right' && <i>{rest.icon}</i>}
  </Wrapper>
);

Button.defaultProps = {
  onClick: () => null,
};

export default Button;
