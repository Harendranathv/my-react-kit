import React from 'react'
import { hydrate } from 'react-dom'
import Loadable from 'react-loadable'
import CoreLayout from './layouts/CoreLayout'

const render = (App, targetDom) => {
  hydrate(
    <App />,
    targetDom
  )
}

window.onload = () => {
  Loadable.preloadReady().then(() => {
    const targetDom = document.querySelector('#root')
    render(CoreLayout, targetDom)

    if (module.hot) {
      // keep in mind - here you are configuring HMR to accept CHILDREN MODULE
      // while `hot` would configure HMR for the CURRENT module
      module.hot.accept('./layouts/CoreLayout', () => {
        // if you are using harmony modules ({modules:false})
        render(CoreLayout, targetDom)
        // in all other cases - re-require App manually
        render(require('./layouts/CoreLayout'), targetDom)
      })
    }
  })
}
