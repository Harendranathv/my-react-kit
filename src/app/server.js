import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import { distDir, publicDir } from '../constants/dirs'
import { HOME_PATH } from '../constants/url'

import render from './render'

const server = express()
const distUrl = '/dist/'
const publicUrl = '/public/'

server.use(distUrl, express.static(distDir))
server.use(publicUrl, express.static(publicDir))

const env = server.get('env')

if (env == 'dev') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')

  const config = require('../../config')
  const compiler = webpack(config)

  server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  })

  server.use(cors())
  server.options('*', cors())

  server.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }))
  server.use(webpackHotMiddleware(compiler))
  server.use(morgan('dev'))
}

server.get(HOME_PATH + '*', (req, res) => {
  render({ req, res })
    .then(({ html, context }) => {
      if (context.status) {
        console.log('Context status: ', context.status)
        return res.status(context.status).send(html)
      }
      if (context.url) {
        return res.redirect(302, context.url)
      }
      res.send(html)
    })
    .catch(err => {
      console.error(err)
      return res.sendStatus(500)
    })
})

export default server
