import React, { MouseEvent, FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

export interface IButtonProps {
  backgroundColor?: string;
  className?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  iconOnly?: boolean;
  iconPosition?: string;
  iconSize?: number;
  ml?: number | string;
  mr?: number | string;
  mx?: number | string;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  outlined?: boolean;
  raised?: boolean;
  text?: string;
  textColor?: string;
  type?: 'button' | 'submit';
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
    {rest.icon && rest.iconPosition === 'left' && <i>{rest.icon}</i>}
    {!rest.iconOnly && <label>{text}</label>}
    {rest.icon && rest.iconPosition === 'right' && <i>{rest.icon}</i>}
  </Wrapper>
);

Button.defaultProps = {
  iconOnly: false,
  iconPosition: 'left',
  onClick: () => null,
  text: 'Button',
  type: 'button',
};

export default Button;
