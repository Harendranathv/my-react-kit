import Loadable from 'react-loadable'

import server from './server'

Loadable.preloadAll().then(() => {
  const PORT = process.env.PORT || 3000
  const HOST = 'localhost'
  const httpServer = server.listen(PORT, HOST, error => {
    if (error) {
      console.error(error)
    } else {
      const address = httpServer.address()
      console.info(`==> 🌎 Listening on ${address.port}. Open up http://${HOST}:${address.port}/ in your browser.`)
    }
  })

  if (module.hot) {
    module.hot.accept('../routes', () => {
      console.log('✅ Server hot reloaded ../routes')
    })
    module.hot.accept('../layouts/CoreLayout', () => {
      console.log('✅ Server hot reloaded ../layouts')
    })
    module.hot.accept('../store/createStore', () => {
      console.log('✅ Server hot reloaded ../store/createStore')
    })
  }
}).catch(err => {
  console.log(err)
})
