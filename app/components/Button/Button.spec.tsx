// Button.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Button from './index';

describe('<Button />', () => {
  it('should display a button', () => {
    const component = renderer.create(<Button onClick={() => null} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
