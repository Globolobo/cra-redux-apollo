import React from 'react';

import { storiesOf } from '@storybook/react';

import SearchAppBar from '../../searchAppBar'

storiesOf('Search App Bar', module)
  .add('Default', () => <SearchAppBar />)
  .add('With Title', () => <SearchAppBar title='Movies for Sean!!'/>)
  .add('With children', () => <SearchAppBar children={<div>I'm a child node!!</div>}/>)
