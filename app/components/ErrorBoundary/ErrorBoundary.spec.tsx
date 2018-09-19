// ErrorBoundary.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import ErrorBoundary from './index';

class ComponentThatWillFail extends React.Component {
  componentDidMount() {
    throw new Error('This component failed on purpose...');
  }

  render() {
    return null;
  }
}

describe('<ErrorBoundary />', () => {
  it('should display a ErrorBoundary', () => {
    const component = renderer
      .create(
        <ErrorBoundary>
          <ComponentThatWillFail />
        </ErrorBoundary>,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
