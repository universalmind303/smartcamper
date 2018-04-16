import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import React from 'react'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'

import App from './app/App'

import reducer from './app/src/rootReducer'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

AppRegistry.registerComponent('smartCamper', () => () => (
  <Provider store={store}>
    <App />
  </Provider>
))
