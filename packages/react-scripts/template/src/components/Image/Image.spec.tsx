// Image.spec.tsx
import * as React from 'react';
import { cleanup, render } from 'react-testing-library';

import Image from './index';

afterEach(cleanup);

describe('Image', () => {
  it('should display an image', () => {
    render(<Image src="../../images/icon-512x512.png" />);
  });
});
