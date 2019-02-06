import React, { Component } from 'react';

// For debugging only.
import { makeDebugger } from '../../utils';
const debug = makeDebugger('ErrorBoundary');

interface IProps {
  className?: string;
  template?: any;
}

interface IState {
  hasError: boolean;
}

/**
 * @render react
 * @name ErrorBoundary container
 * @description ErrorBoundary container.
 * @example
 * <ErrorBoundary />
 */

// eslint-disable-next-line react/prefer-stateless-function
class ErrorBoundary extends Component<IProps, IState> {
  state = {
    hasError: false,
  }

  public componentDidCatch(error: object, errorInfo: object) {
    this.setState({
      hasError: true,
    });

    debug(error, errorInfo);
  }

  public render() {
    const { template } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return template || <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
