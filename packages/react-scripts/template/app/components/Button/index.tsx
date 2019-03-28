import React, { MouseEvent, FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

export interface IButtonProps {
  backgroundColor?: string;
  className?: string;
  disabled?: boolean;
  icon?: JSX.Element;
  iconPosition?: string;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  outlined?: boolean;
  raised?: boolean;
  text?: string;
  textColor?: string;
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
    <label>{text}</label>
    {rest.icon && rest.iconPosition === 'right' && <i>{rest.icon}</i>}
  </Wrapper>
);

Button.defaultProps = {
  iconPosition: 'left',
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  marginTop: 0,
  onClick: () => null,
  text: 'Button',
};

export default Button;
