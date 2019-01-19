import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SearchBox from '../../searchBox'

storiesOf('Search Box', module)
  .add('Default', () => <SearchBox onSearch={action('Movie input: ')} />)
