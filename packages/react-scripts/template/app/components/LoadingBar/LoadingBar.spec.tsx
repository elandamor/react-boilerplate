// LoadingBar.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import LoadingBar from './index';

describe('<LoadingBar />', () => {
  it('should display a loading bar', () => {
    const component = renderer.create(<LoadingBar />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
