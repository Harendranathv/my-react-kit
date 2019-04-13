import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'
import { renderStylesToString } from 'emotion-server'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable-ssr-addon'
import serialize from 'serialize-javascript'
import { StaticRouter } from 'react-router'

import routes from '../routes'
import createStore, { getInitialData } from '../store'

import CoreLayout from '../layouts/CoreLayout'

const manifest = require('../../dist/react-loadable-ssr-addon.json')

const renderHtml = ({
  expressCtx,
  store,
  context,
  helmetCtx
}) => {
  const modules = new Set()
  const root = renderStylesToString(renderToString(
    <Loadable.Capture report={moduleName => modules.add(moduleName)}>
      <HelmetProvider context={helmetCtx}>
        <Provider store={store}>
          <StaticRouter location={expressCtx.req.url} context={context}>
            <CoreLayout />
          </StaticRouter>
        </Provider>
      </HelmetProvider>
    </Loadable.Capture>
  ))

  const bundles = getBundles(manifest, [...manifest.entrypoints, ...Array.from(modules)])

  const styles = bundles.css || []
  const scripts = bundles.js || []

  const { helmet } = helmetCtx

  let helmetTitle = helmet.title.toString()
  let helmetMeta = helmet.meta.toString()
  let helmetLink = helmet.link.toString()
  let helmetScript = helmet.script.toString()
  let initScript = `<script type="text/javascript">window.INITIAL_STATE = ${serialize(
    store.getState()
  )};</script>`

  const html = `<!doctype html>
    <html lang="en">
      <head>
        ${helmetTitle}
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        ${[helmetMeta, helmetLink, helmetScript]
        .filter(s => s !== '')
        .join('\n')}
        ${styles.map(style => {
          return `<link href="/dist/${style.file}" rel="stylesheet" />`
        }).join('\n')}
      </head>
      <body>
        <div id="root">${root}</div>
        ${initScript}
        ${scripts.map(script => {
          return `<script async src="/dist/${script.file}"></script>`
        }).join('\n')}
      </body>
    </html>`
  return { html, context }
}

const render = (expressCtx) => {
  const { req } = expressCtx
  const store = createStore()
  let helmetCtx = {}, context
  const promises = getInitialData({ req, routes, store })
  return Promise.all(promises)
    .catch(err => {
      console.error('Error getInitialData:\n', err)
    })
    .then(() => {
      context = {}
      const data = {
        expressCtx,
        store,
        context,
        helmetCtx
      }
      return renderHtml(data)
    })
}

export default render
