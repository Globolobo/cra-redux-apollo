import React from 'react';
import { storiesOf } from '@storybook/react';

import IncidentCard from '..'
import DateChip from '../../dateChip'


const title = 'Incident Name'
const status = 'In Progress'
const imgSrc = 'https://image.tmdb.org/t/p/original/mc7MubOLcIw3MDvnuQFrO9psfCa.jpg'
const time = new Date()
const timeEndBool = true;

storiesOf('Incident Card', module)
  .add('With Title', () => <IncidentCard {...{title, status }}/>)
  .add('With img', () => <IncidentCard {...{title, imgSrc, status}} />)
  .add('With Children', () => 
    <IncidentCard {...{ title, imgSrc, status}}>
      <>
        <DateChip {...{time}}/>
        { timeEndBool && <DateChip  {...{time}}  timeEndBool/> }
      </>
    </IncidentCard>
    )
