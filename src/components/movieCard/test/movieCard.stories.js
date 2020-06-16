import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import MovieCard from '../../movieCard'

const overview = `NYPD cop John McClane's plan to reconcile with his 
estranged wife is thrown for a serious loop when, minutes after he arrives 
at her office, the entire building is overtaken by a group of terrorists. 
With little help from the LAPD, wisecracking McClane sets out to single-handedly 
rescue the hostages and bring the bad guys down.`

const title = 'Die Hard'
const date = 'jan 21 2019'
const imgSrc = 'someSrc'
const onClick = action('clicked Expand')

storiesOf('Movie Card', module)
  .add('With Title', () => <MovieCard {...{title, date, imgSrc, onClick}}/>)
  .add('Expanded', () => <MovieCard expanded={true} {...{overview, title, imgSrc, date, onClick}}/>)
