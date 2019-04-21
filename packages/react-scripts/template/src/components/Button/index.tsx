import React, { MouseEvent, FC } from 'react';
import classNames from 'classnames';
import { ColorProps, SpaceProps } from 'styled-system';
// Styles
import Wrapper from './styles';

export interface IButtonProps extends ColorProps, SpaceProps {
  ariaLabel?: string;
  backgroundColor?: string;
  className?: string;
  color?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  iconPosition?: string;
  iconSize?: number;
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
  text,
  ...rest
}) => (
  <Wrapper
    aria-label={rest.ariaLabel || text}
    className={classNames('c-btn', className)}
    {...rest}
  >
    {rest.icon && rest.iconPosition === 'left' && <i>{rest.icon}</i>}
    {!rest.iconOnly && <label>{text}</label>}
    {rest.icon && rest.iconPosition === 'right' && <i>{rest.icon}</i>}
  </Wrapper>
);

Button.defaultProps = {
  color: 'text',
  iconOnly: false,
  iconPosition: 'left',
  onClick: () => null,
  text: 'Button',
  type: 'button',
};

export default Button;
