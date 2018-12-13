import React, { SFC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name Input component
 * @description Input component.
 * @example
 * <Input
 *  id="text"
 *  label="Text"
 *  name="text"
 *  type="text"
 * />
 */

interface IProps {
  className?: string;
  checked?: boolean;
  id: string;
  label: string;
  name: string;
  onChange: (event: any) => void;
  placeholder?: string;
  readonly?: boolean;
  rows?: number;
  sronly?: boolean;
  type:
    | 'text'
    | 'email'
    | 'file'
    | 'date'
    | 'password'
    | 'textarea'
    | 'checkbox'
    | 'radio'
    | 'number';
  value?: any;
};

const Input: SFC<IProps> = ({
  checked,
  className,
  id,
  label,
  sronly,
  ...rest
}) => (
  <Wrapper
    className={classNames('c-input__wrapper', className, { '-active': checked })}
  >
    <label htmlFor={id}>
      <span
        className={classNames('a-label', {
          'sr-only': sronly,
        })}
      >
        {label}
      </span>
      {rest.type === 'textarea' ? (
        <textarea id={id} className="a-textarea" {...rest} />
      ) : (
        <input id={id} className="a-input" {...rest} />
      )}
    </label>
  </Wrapper>
);

export default Input;
