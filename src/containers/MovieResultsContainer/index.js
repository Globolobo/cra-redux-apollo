import React from 'react';
import { useSelector } from 'react-redux'
import GridList from '@material-ui/core/GridList'
import MovieCard from '../MovieCard'

const MovieResultsContainer = () => {
const movieResults = useSelector(state => state.movieResults.movieResults) //TODO change this.

  return(
    movieResults && movieResults.length > 0 ?
        <GridList cellHeight={160} cols={3}> 
          {movieResults.map((curr, i) =>
            <MovieCard key={curr.id} {...{...curr}}/>
          )}
        </GridList> : <div />
  )
}

export default MovieResultsContainer;
