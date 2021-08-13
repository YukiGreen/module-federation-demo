const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJSON = require('./package.json')

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8992/'
  },
  devServer: {
    port: 8992,
    historyApiFallback: true
  },
  module: {
    rules: [{
      test: /\.js|jsx$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', '@babel/preset-env'],
          plugins: ['@babel/plugin-transform-runtime']
        }
      }
    }]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'reactProjectTwo',
      filename: 'remoteEntry.js',
      exposes: {
        './ReactProjectTwoApp': './src/bootstrap.js'
      },
      shared: packageJSON.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}