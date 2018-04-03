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
 *  id="password"
 *  label="Password"
 *  type="password"
 * />
 */

interface IProps {
  className?: string;
  id: string;
  label: string;
  type?: string;
}

const Input: SFC<IProps> = ({ className, id, label, ...rest }) => (
  <Wrapper className={classNames('c-input-wrapper', className)}>
    <label htmlFor={id}>
      <span className={classNames('a-label')}>
        { label }
      </span>
      <input id={id} className="a-input" {...rest} />
    </label>
  </Wrapper>
);

Input.defaultProps = {
  type: 'text',
};

export default Input;
