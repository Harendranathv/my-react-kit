const path = require('path')

const distDir = path.resolve(process.cwd(), 'dist')
const srcDir = path.resolve(process.cwd(), 'src')
const modulesDir = path.resolve(process.cwd(), 'node_modules')

module.exports = {
  distDir,
  srcDir,
  modulesDir
}
