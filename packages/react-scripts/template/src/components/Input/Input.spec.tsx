// Input.spec.tsx
import * as React from 'react';
import { fireEvent, render } from 'react-testing-library';

import Input from './index';

describe('Input', () => {
  it('should render a text input', () => {
    render(
      <Input
        id="username"
        label="Username"
        name="username"
        onChange={() => null}
        type="text"
      />,
    );
  });

  it('should render a textarea input', () => {
    render(
      <Input
        id="message"
        label="Message"
        name="message"
        onChange={() => null}
        type="textarea"
      />,
    );
  });

  it('should handle onChange event', () => {
    function Booking() {
      const [name, setName] = React.useState('');

      return (
        <Input
          id="name"
          label="Name"
          name="name"
          onChange={(event) => setName(event.target.value)}
          type="text"
          value={name}
        />
      );
    }

    const payload = {
      name: 'Elandamor',
    };

    const { getByLabelText } = render(<Booking />);
    const nameTextfieldNode: any = getByLabelText('Name');

    fireEvent.change(nameTextfieldNode, { target: { value: payload.name } });
    expect(nameTextfieldNode.value).toEqual(payload.name);
  });
});
