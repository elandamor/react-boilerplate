// Image.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Image from './index';

describe('<Image />', () => {
  it('should display an image', () => {
    const component = renderer
      .create(<Image src="../../images/icon-512x512.png" />)
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
