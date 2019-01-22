import { delay, switchMap } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import gql from 'graphql-tag'

import SEARCH from './constants'
import { MOVIE_SEARCH_COMPLETE, MOVIE_SEARCH_FAILED } from '../constants'

import { client } from '../../index'

const SEARCHQUERY = gql`
  query MovieResults($title: String) {
    MovieResults(title: $title) {
      id
      title
      date
      imgSrc
      overview
    }
  }
`

const sendQuery = (query, variables) => {
  return client.query({ query, variables })
    .catch(err => {
      console.error('error...', err)
      return Promise.reject(err)
    })
}

export const onMoviesNeedUpdateEpic = (action$, state$) => {
  return action$.pipe(
    ofType(SEARCH),
    delay(200),
    switchMap(({ queryString }) => {
      return sendQuery(SEARCHQUERY, { title: queryString })
        .then(({ data }) => {
          const { MovieResults } = data
          return {
            type: MOVIE_SEARCH_COMPLETE,
            MovieResults
          }
      }).catch(error => {
        console.log(error)
        return {
          type: MOVIE_SEARCH_FAILED,
          error
        }
      })
    }
    ))
}
