import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CommandBox from '../../commandBox'

storiesOf('Command Box', module)
  .add('Default', () => <CommandBox onCommand={action('Command input: ')} />)
