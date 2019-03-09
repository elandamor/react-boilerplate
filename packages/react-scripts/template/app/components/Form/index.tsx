import React, { FC } from 'react';
import classNames from 'classnames';
// Styles
import Wrapper from './styles';

// import { makeDebugger } from '../../utils';
// const debug = makeDebugger('Form');

interface IProps {
  children: JSX.Element | JSX.Element[];
  className?: string;
  onSubmit?: (event?: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * @render react
 * @name Form component
 * @description Creates an HTML form for user input.
 * @example
 *  <Form onSubmit={() => handleSubmit}>
 *    <Input
 *      id="text"
 *      label="Text"
 *      name="text"
 *      type="text"
 *    />
 *    <Button
 *      text="Submit"
 *      type="submit"
 *    />
 *  </Form>
 */

const Form: FC<IProps> = ({ children, className, onSubmit: handleSubmit }) => (
  <Wrapper
    children={children}
    className={classNames('c-form', className)}
    onKeyDown={(event: React.KeyboardEvent<HTMLFormElement>) => {
      /**
       * Note: Pressing enter in some input in a browser forms triggers onClick
       * on the first child button
       *
       * So, prevent `enter` from triggering `onClick` on any buttons and
       * instead trigger onSubmit
       */
      if (event.key === 'Enter') {
        // @ts-ignore
        if (event.target.type !== 'textarea') {
          event.preventDefault();
        }
      }
    }}
    onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
      /**
       * Prevent submission from reloading the page
       */
      event.preventDefault();
      event.stopPropagation();
      handleSubmit && handleSubmit(event);
    }}
  />
);

Form.defaultProps = {
  onSubmit: () => null,
};

export default Form;
