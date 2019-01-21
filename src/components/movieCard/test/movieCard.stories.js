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
const imgSrc = 'https://image.tmdb.org/t/p/original/mc7MubOLcIw3MDvnuQFrO9psfCa.jpg'

storiesOf('Movie Card', module)
  .add('Default', () => <MovieCard />)
  .add('With Title', () => <MovieCard {...{title, date}}/>)
  .add('With img', () => <MovieCard {...{title, imgSrc, date}} />)
  .add('Expanded', () => <MovieCard expanded={true} {...{overview}}/>)
  .add('All', () => <MovieCard expanded={true} {...{overview, title, imgSrc, date}}/>)
