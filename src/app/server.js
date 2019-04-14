import express from 'express'
import path from 'path'
import render from './render'

const server = express()
const distUrl = '/dist/'
const publicUrl = '/public/'
server.use(distUrl, express.static(path.resolve(process.cwd(), 'dist')))
server.use(publicUrl, express.static(path.resolve(process.cwd(), 'public')))

server.get('/*', (req, res) => {
  return render({ req, res })
    .then(({ html, context }) => {
      if (context.status) {
        console.log('Context status: ', context.status)
        return res.status(context.status).send(html)
      }
      if (context.url) {
        return res.redirect(302, context.url)
      }
      return res.send(html)
    })
    .catch(err => {
      console.error(err)
      return res.sendStatus(500)
    })
})

export default server
