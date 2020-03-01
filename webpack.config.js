const path = require('path');
const Webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

module.exports = {
  watch: true,
  mode: 'production',
  entry: "./src/index.js",
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  plugins: [
    new Webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new BrowserSyncPlugin({
      proxy: "http://localhost/",
      host: 'localhost',
      port: 3000
    })    
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "useBuiltIns": "entry"
                }
              ]
            ]
          }
        }
      }
    ]
  }
}