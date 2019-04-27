const path = require('path')

const distDir = path.resolve(process.cwd(), 'dist')
const publicDir = path.resolve(process.cwd(), 'public')
const srcDir = path.resolve(process.cwd(), 'src')
const modulesDir = path.resolve(process.cwd(), 'node_modules')

module.exports = {
  distDir,
  publicDir,
  srcDir,
  modulesDir
}
