// ErrorBoundary.spec.tsx
import * as React from 'react';
import { cleanup, render } from 'react-testing-library';

import ErrorBoundary from './index';

afterEach(cleanup);

class ComponentThatWillFail extends React.Component {
  componentDidMount() {
    throw new Error('This component failed on purpose...');
  }

  render() {
    return null;
  }
}

describe('Error Boundary', () => {
  it('should display default ErrorBoundary', () => {
    spyOn(console, 'error');

    render(
      <ErrorBoundary>
        <ComponentThatWillFail />
      </ErrorBoundary>
    );
  });

  it('should display ErrorBoundary with custom fallback', () => {
    spyOn(console, 'error');

    render(
      <ErrorBoundary
        template={(
          <h1>Oops! Something went wrong.</h1>
        )}
      >
        <ComponentThatWillFail />
      </ErrorBoundary>
    );
  });
});
