import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { matchRoutes } from 'react-router-config'
import { UAParser } from 'ua-parser-js'

import reducer from '../reducers'
import { initUserAgent } from '../reducers/user-agent'

const devMode = process.env.NODE_ENV && process.env.NODE_ENV === 'development'

export const getInitialData = ({ req, routes, store }) => {
  const ua = req && req.headers['user-agent']
    ? new UAParser(req.headers['user-agent']).getResult()
    : new UAParser().getResult()
  store.dispatch(initUserAgent(ua))

  if (req && req.path && routes) {
    const path = req.path
    return matchRoutes(routes, path).map(({ route }) => {
      const promises = []
      if (route.loadData) {
        promises.push(route.loadData(store, req))
      }
      return Promise.all(promises)
    })
  }

  return store
}

export default (initialState = {}) => {
  const composeEnhancers = devMode
    ? composeWithDevTools
    : compose

  const middleware = [thunk]
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      console.log('Root reducer updated')
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
