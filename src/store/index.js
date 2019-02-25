import { createStore } from 'redux'
import { rootReducer } from './rootReducers'
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

  const store = createStore(
    rootReducer,
    initialState,
  )

  if (module.hot) {
    module.hot.accept('./rootReducers', () => {
      const nextRootReducer = require('./rootReducers/index').rootReducer
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
