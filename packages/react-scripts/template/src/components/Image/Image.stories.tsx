import React from 'react';
import { storiesOf } from '@storybook/react';
import { Share } from 'react-feather';

import Button from './index';

storiesOf('Button', module)
.add('default', () => <Button />)
.add('default with icon', () => <Button icon={<Share />} />)
.add('outlined', () => <Button outlined />)
.add('outlined with icon', () => <Button outlined icon={<Share />} />)
.add('raised', () => <Button raised />)
.add('raised with icon', () => <Button raised icon={<Share />} />)

