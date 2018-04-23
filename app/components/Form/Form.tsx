import React, { SFC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

/**
 * @render react
 * @name Form component
 * @description Form component.
 * @example
 * <Form />
 */

interface IProps {
  children?: JSX.Element[];
  className?: string;
  onSubmit: () => any;
}

const Form: SFC<IProps> = ({ className, children, onSubmit }) => (
  <Wrapper
    className={classNames('c-form', className)}
    onKeyDown={
      (event) => {
        /**
         * Note: Pressing enter in some input in a browser forms
         *  triggers onClick on the first child button
         *
         * So, prevent `enter` from triggering `onClick` on any buttons
         *  and instead trigger onSubmit
         */
        if (event.key === 'Enter') {
          event.preventDefault();
          onSubmit();
        }
      }
    }
    onSubmit={
      (event) => {
        /**
         * Prevent submit from reloading the page
         */
        event.preventDefault();
        event.stopPropagation();
        onSubmit();
      }
    }
  >
    {children}
  </Wrapper>
);

Form.defaultProps = {
  className: '',
};

export default Form;
