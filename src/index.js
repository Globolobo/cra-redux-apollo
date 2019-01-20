import React from 'react'
import { render } from 'react-dom'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import configureStore from './store/index'
import { persistCache } from 'apollo-cache-persist'
import { BatchHttpLink } from 'apollo-link-batch-http'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore()

const cache = new InMemoryCache()

persistCache({
  cache,
  storage: window.localStorage
})

const link = new BatchHttpLink()

export const client = new ApolloClient({
  link,
  cache
})

render(
  <Provider {...{store}}>
    <ApolloProvider {...{client}}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();