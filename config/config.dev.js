const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const common = require('./config.common')
const { srcDir, distDir } = require('./dirs')

const PORT = 3000

const webpackConfigs = merge.smart(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      "react-hot-loader/patch",
      "webpack-dev-server/client?http://localhost:" + PORT + "/",
      "webpack/hot/only-dev-server",
      path.join(srcDir, 'client.js'),
    ]
  },
  devServer: {
    port: PORT,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(srcDir, 'index.html')
    })
  ]
})

module.exports = webpackConfigs
