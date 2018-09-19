// Form.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Form from './index';

import Button from '../Button';
import Input from '../Input';

describe('<Form />', () => {
  it('should display a Form', () => {
    const component = renderer
      .create(
        <Form onSubmit={() => null}>
          <Input
            id="username"
            label="Username"
            name="username"
            onChange={() => null}
          />
          <Button onClick={() => null}>Submit</Button>
        </Form>,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
