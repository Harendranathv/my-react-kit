import React from 'react'
import { hydrate } from 'react-dom'
import Loadable from 'react-loadable'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { HelmetProvider } from 'react-helmet-async'

import createStore, { getInitialData } from '../store'

import CoreLayout from '../layouts/CoreLayout'

const render = (App, store, targetDom) => {
  hydrate(
    <HelmetProvider>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </HelmetProvider>,
    targetDom
  )
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  window.onload = () => {
    Loadable.preloadReady().then(() => {
      const initialState = window.INITIAL_STATE || {}
      const store = getInitialData({ store: createStore(initialState) })
      const targetDom = document.querySelector('#root')

      render(CoreLayout, store, targetDom)

      if (module.hot) {
        // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
        // while `hot` would configure HMR for the CURRENT module
        module.hot.accept('../layouts/CoreLayout', () => {
          // if you are using harmony modules ({modules:false})
          render(CoreLayout, store, targetDom)
          // in all other cases - re-require App manually
          render(require('../layouts/CoreLayout'), store, targetDom)
        })
      }
    })
  }
}
