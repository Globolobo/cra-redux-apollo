import React from 'react';
import { storiesOf } from '@storybook/react';

import IncidentAppBar from '../../IncidentAppBar'

storiesOf('Incident App Bar', module)
  .add('Default', () => <IncidentAppBar />)
  .add('With Title', () => <IncidentAppBar title='Incidents for Sean!!'/>)
  .add('With children', () => <IncidentAppBar children={<div>I'm a child node!!</div>}/>)
