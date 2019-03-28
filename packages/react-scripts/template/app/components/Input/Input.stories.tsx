import React from 'react';
import { storiesOf } from '@storybook/react';

import Input from './index';

storiesOf('Input', module)
.add('text', () => (
  <Input
    id="name"
    label="Name"
    name="name"
    onChange={() => null}
    placeholder="Name"
    type="text"
    helperText="Helper text"
    sronly
  />
))
.add('checkbox', () => (
  <Input
    id="checkbox"
    label="Checkbox"
    name="checkbox"
    onChange={() => null}
    type="checkbox"
  />
))
.add('radio', () => (
  <Input
    id="radio"
    label="Radio"
    name="radio"
    onChange={() => null}
    type="radio"
  />
))
.add('toggle', () => (
  <Input
    id="toggle"
    label="Toggle"
    name="toggle"
    onChange={() => null}
    type="checkbox"
    as="toggle"
  />
))
