import React from 'react';
import { useSelector } from 'react-redux'
import GridList from '@material-ui/core/GridList'
import { withStyles } from '@material-ui/core/styles';

import MovieCard from '../MovieCard'
import styles from './styles'

const MovieResultsContainer = ({classes}) => {
const movieResults = useSelector(state => state.movieResults.movieResults) //TODO change this.

  return(
    movieResults && movieResults.length > 0 ?
      <div className={classes.root}>
        <GridList cellHeight={160} className={classes.gridList} cols={3}> 
          {movieResults.map((curr, i) =>
            <MovieCard key={curr.id} {...{...curr}}/>
          )}
        </GridList> 
      </div>
    : <div />
  )
}

export default withStyles(styles)(MovieResultsContainer);
