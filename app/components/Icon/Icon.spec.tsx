// Icon.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import Icon from './index';

describe('<Icon />', () => {
  it('should display a Icon component', () => {
    const component = renderer.create(<Icon icon="add" />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
