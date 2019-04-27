const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const { srcDir, distDir, publicDir } = require('./dirs')

const PORT = 3000

const webpackConfigs = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'babel-polyfill',
      'webpack-hot-middleware/client',
      path.join(srcDir, 'app/client.js'),
    ]
  },
  plugins: [
    // new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new CleanWebpackPlugin()
  ]
}

module.exports = webpackConfigs
