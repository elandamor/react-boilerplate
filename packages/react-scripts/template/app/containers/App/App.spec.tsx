// App.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import App from './index';

describe('<App />', () => {
  it('should render App without crashing', () => {
    const component = renderer.create(<App />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
