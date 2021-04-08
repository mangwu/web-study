let path = require('path')
let base = require('./webpack.base.config')
const {merge} = require('webpack-merge')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
})


