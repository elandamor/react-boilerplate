// MultiStep.spec.tsx
import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import MultiStep from './index';

const Step1: React.SFC<{}> = () => <div>Step 1</div>;
const Step2: React.SFC<{}> = () => <div>Step 2</div>;
const Step3: React.SFC<{}> = () => <div>Step 3</div>;

describe('<MultiStep />', () => {
  it('should display a MultiStep', () => {
    const component = renderer
      .create(
        <MultiStep
          onSubmit={() => null}
          steps={[
            { component: <Step1 />, name: 'Step 1' },
            { component: <Step2 />, name: 'Step 2' },
            { component: <Step3 />, name: 'Step 3' },
          ]}
        />,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
