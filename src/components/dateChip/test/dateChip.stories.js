import React from 'react';
import { storiesOf } from '@storybook/react';

import DateChip from '../../dateChip'

const time = new Date()

storiesOf('Date Chip', module)
  .add('With Start Time', () => <DateChip {...{ time }} />)
  .add('With End Time', () => <DateChip {...{ time }} timeEndBool/>)
