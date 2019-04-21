// Form.spec.tsx
import * as React from 'react';
import { fireEvent, render } from 'react-testing-library';

import Button from '../Button';
import Input from '../Input';

import Form from './index';

describe('Form', () => {
  it('should render without crashing', () => {
    render(
      <Form>
        <Input
          id="name"
          label="Name"
          name="name"
          onChange={() => null}
          type="text"
          value="Elandamor"
        />
        <Button text="Submit" />
      </Form>,
    );
  });

  it('should handle onSubmit event', () => {
    const handleSubmit = jest.fn();
    const payload = { name: 'Elandamor' };

    function BookingForm({ onSubmit: handleSubmit }: any) {
      const [name, setName] = React.useState('');

      return (
        <Form onSubmit={() => handleSubmit({ name })}>
          <Input
            id="name"
            label="Name"
            name="name"
            onChange={(event) => setName(event.currentTarget.value)}
            type="text"
            value={name}
          />
          <Button type="submit" text="Submit" />
        </Form>
      );
    }

    const { getByLabelText } = render(
      <BookingForm onSubmit={handleSubmit} />,
    );

    const nameTextfieldNode: any = getByLabelText('Name');
    const submitButtonNode = getByLabelText('Submit');

    fireEvent.change(nameTextfieldNode, { target: { value: payload.name } });
    fireEvent.click(submitButtonNode);

    expect(nameTextfieldNode.value).toEqual(payload.name);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(payload);
  });
});
