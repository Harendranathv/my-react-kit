import express from 'express'
import path from 'path'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable-ssr-addon'
import CoreLayout from './layouts/CoreLayout'

const manifest = require('../dist/react-loadable-ssr-addon.json')
const server = express()

server.use('/dist', express.static(path.resolve(process.cwd(), 'dist')))
server.use('/public', express.static(path.resolve(process.cwd(), 'public')))

server.get('*', (req, res) => {
  const modules = new Set()
  const root = renderToString(
    <Loadable.Capture report={moduleName => modules.add(moduleName)}>
      <CoreLayout/>
    </Loadable.Capture>
  )

  const bundles = getBundles(manifest, [...manifest.entrypoints, ...Array.from(modules)])

  const styles = bundles.css || []
  const scripts = bundles.js || []
  const html = `<!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Ruang Usaha Untuk Semua | Rusaha.com</title>
        ${styles.map(style => {
          return `<link href="/dist/${style.file}" rel="stylesheet" />`
        }).join('\n')}
      </head>
      <body>
        <div id="root">${root}</div>
        ${scripts.map(script => {
          return `<script src="/dist/${script.file}"></script>`
        }).join('\n')}
      </body>
    </html>`
  res.send(html)
})

const PORT = 3000
Loadable.preloadAll().then(() => {
  server.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}/`)
  })
}).catch(err => {
  console.log(err)
})
