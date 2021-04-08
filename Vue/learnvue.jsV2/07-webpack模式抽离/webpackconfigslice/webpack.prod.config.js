const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
let base = require('./webpack.base.config')
const {merge} = require('webpack-merge')

module.exports = merge(base, {
  mode: 'production',
  plugins: [
    new UglifyjsWebpackPlugin()
  ],
})
