const webpack = require('webpack')
const path = require('path')
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon')

const { srcDir, distDir, modulesDir } = require('./dirs')
const rules = require('./rules')

const MODULE_PATHS = [
  distDir,
  srcDir,
  modulesDir,
]

const commonConfigs = {
  target: 'web',
  output: {
    path: distDir,
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  resolve: {
    modules: MODULE_PATHS,
    extensions: ['.js', '.jsx']
  },
  module: {
    rules
  },
  plugins: [
    new webpack.ProvidePlugin({
      "React": "react",
    }),
    new ReactLoadableSSRAddon({
      filename: 'react-loadable-ssr-addon.json',
    })
  ]
}

module.exports = commonConfigs
