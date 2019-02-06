// Button.spec.tsx
import * as React from 'react';
import { cleanup, fireEvent, render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Button from './index';

afterEach(cleanup);

describe('Button', () => {
  it('should render with text', () => {
    const props = {
      onClick: () => null,
      text: 'Test',
    };

    const { getByText } = render(<Button {...props} />);

    const testButton = getByText(props.text);

    expect(testButton).toBeDefined();
  });

  it('should handle onClick event', () => {
    function Counter() {
      const [count, setCount] = React.useState(0);

      const props = {
        onClick: () => setCount(count + 1),
        text: count.toString(),
      };

      return <Button {...props} />;
    }

    const { container: { firstChild: buttonNode } } = render(<Counter />);

    // @ts-ignore
    fireEvent.click(buttonNode);
    expect(buttonNode).toHaveTextContent('1');
  });
});
