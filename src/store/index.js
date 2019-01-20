import { createStore, applyMiddleware } from 'redux'
import { rootEpic, rootReducer } from './rootReducers'
import { createEpicMiddleware } from 'redux-observable'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BehaviorSubject } from 'rxjs'
import { switchMap } from 'rxjs/operators'
/**
 * @module Store
 */

/**
 * Configures the redux store middleware.
 * @method configureStore
 * @param {Object} initialState - the initial state
 * @returns {Object} the redux store
 * @for Store
 */

export default function configureStore (initialState) {
  const epicMiddleware = createEpicMiddleware()

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(epicMiddleware, logger)
    )
  )
  const epic$ = new BehaviorSubject(rootEpic)

  const hotReloadingEpic = (...args) =>
    epic$.pipe(
      switchMap(epic => epic(...args))
    )

  epicMiddleware.run(hotReloadingEpic)

  if (module.hot) {
    module.hot.accept('./rootReducers', () => {
      const nextRootEpic = require('./rootReducers/index').rootEpic
      const nextRootReducer = require('./rootReducers/index').rootReducer
      epic$.next(nextRootEpic)
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
