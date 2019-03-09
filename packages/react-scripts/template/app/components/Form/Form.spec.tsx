// Form.spec.tsx
import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import "jest-dom/extend-expect";

import Button from "../Button";
import Input from "../Input";

import Form from "./index";

afterEach(cleanup);

describe("Form", () => {
  it("should render without crashing", () => {
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
      </Form>
    );
  });

  it("should handle onSubmit event", () => {
    function BookingForm({ onSubmit: handleSubmit }: any) {
      const [name, setName] = React.useState("");

      return (
        <Form onSubmit={() => handleSubmit({ name })}>
          <Input
            id="name"
            label="Name"
            name="name"
            onChange={(event) => setName(event.target.value)}
            type="text"
            value={name}
          />
          <Button text="Submit" />
        </Form>
      );
    }

    const handleSubmit = jest.fn();
    const payload = { name: "Elandamor" };

    const { getByLabelText, getByText } = render(
      <BookingForm onSubmit={handleSubmit} />
    );

    const nameTextfieldNode: any = getByLabelText("Name");
    const submitButtonNode = getByText("Submit");

    fireEvent.change(nameTextfieldNode, { target: { value: payload.name } });
    fireEvent.click(submitButtonNode);

    expect(nameTextfieldNode.value).toEqual(payload.name);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(payload);
  });
});
