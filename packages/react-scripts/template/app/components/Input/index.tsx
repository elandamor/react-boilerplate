import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper, { HelperText } from './styles';

export interface IInputProps {
  as?: string;
  className?: string;
  checked?: boolean;
  helperText?: string;
  id: string;
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => void;
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
}

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

const Input: FC<IInputProps> = ({
  checked,
  className,
  helperText,
  id,
  label,
  sronly,
  ...rest
}) => {
  const renderLabel = (label: string, sronly?: boolean) => (
    <span
      className={classNames('a-label', {
        'sr-only': sronly,
      })}
    >
      {label}
    </span>
  );

  return (
    <Wrapper
      className={classNames('c-input__wrapper', className, {
        '-active': checked,
      })}
      readonly={rest.readonly}
      type={rest.type}
      as={rest.as}
    >
      <label htmlFor={id}>
        {
          (rest.type !== 'checkbox' && rest.type !== 'radio')
          && renderLabel(label, sronly)
        }
        {
          rest.type === 'textarea'
          ? (<textarea id={id} className="a-textarea" {...rest} />)
          : (<input id={id} className="a-input" {...rest} />)
        }
        {
          (rest.type === 'checkbox' || rest.type === 'radio')
          && (
            <React.Fragment>
              <span className={`a-${rest.type}`} />
              {renderLabel(label, sronly)}
            </React.Fragment>
          )
        }
        { helperText && <HelperText>{helperText}</HelperText>}
      </label>
    </Wrapper>
  );
};

export default Input;
