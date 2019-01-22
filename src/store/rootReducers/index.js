import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import { onMoviesNeedUpdateEpic } from '../../containers/SearchAppBar/epic'
import movieResults from '../../containers/MovieResultsContainer/reducer'

export const rootReducer = combineReducers({
  movieResults
})

export const rootEpic = combineEpics(
  onMoviesNeedUpdateEpic
)
