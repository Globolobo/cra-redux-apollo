import { MOVIE_SEARCH_COMPLETE, MOVIE_SEARCH_FAILED } from '../constants'

export const initialState = {
  movieResults: [],
}

const movieResults = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_SEARCH_FAILED:
    case MOVIE_SEARCH_COMPLETE: {
      const { MovieResults } = action
      return { movieResults: MovieResults }
    }
    default:
      return state
  }
}

export default movieResults
