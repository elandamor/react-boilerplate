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
 *  type="text"
 * />
 */

interface IProps {
  className?: string;
  id: string;
  label: string;
  sronly?: boolean;
  type?: string;
}

const Input: SFC<IProps> = ({ className, id, label, sronly, ...rest }) => (
  <Wrapper className={classNames('c-input-wrapper', className)}>
    <label htmlFor={id}>
      <span
        className={classNames('a-label', {
          'sr-only': sronly,
        })}
      >
        { label }
      </span>
      <input id={id} className="a-input" {...rest} />
    </label>
  </Wrapper>
);

Input.defaultProps = {
  sronly: false,
  type: 'text',
};

export default Input;
