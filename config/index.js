const merge = require('webpack-merge')
const common = require('./config.common')

const webpackConfigs = merge.smart(common, require(`./config.${process.env.NODE_ENV || 'prod'}`))

module.exports = webpackConfigs
