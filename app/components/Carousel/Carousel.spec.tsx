// Carousel.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Carousel from './index';

describe('<Carousel />', () => {
  it('should display a Carousel', () => {
    const component = renderer
      .create(
        <Carousel>
          <div>Slide 1</div>
          <div>Slide 2</div>
          <div>Slide 3</div>
        </Carousel>,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
