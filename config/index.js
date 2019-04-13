const merge = require('webpack-merge')
const common = require('./config.common')
console.log('webpack configs = ./config/config.' + process.env.NODE_ENV)
const webpackConfigs = require(`./config.${process.env.NODE_ENV || 'prod'}`)
const configs = merge.smart(common, webpackConfigs)

module.exports = configs
