const webpack = require('webpack')
const path = require('path')
const ReactLoadableSSRAddon = require('react-loadable-ssr-addon')
const { GenerateSW } = require('workbox-webpack-plugin')

const { srcDir, distDir, modulesDir } = require('./dirs')
const rules = require('./rules')

const MODULE_PATHS = [
  distDir,
  srcDir,
  modulesDir,
]

const commonConfigs = {
  target: 'web',
  resolve: {
    modules: MODULE_PATHS,
    extensions: ['.js', '.jsx']
  },
  output: {
    path: distDir,
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].chunk.js',
    globalObject: 'this'
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
    }),
    new GenerateSW({
      swDest: 'sw.js',
      importWorkboxFrom: 'local'
    })
  ]
}

module.exports = commonConfigs
