// Input.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Input from './index';

describe('<Input />', () => {
  it('should display a form input', () => {
    const component = renderer
      .create(
        <Input
          id="username"
          label="Username"
          name="username"
          onChange={() => null}
        />,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
