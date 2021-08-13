const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const packageJSON = require('./package.json')

module.exports = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8991/'
  },
  devServer: {
    port: 8991,
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
      name: 'reactProjectOne',
      filename: 'remoteEntry.js',
      exposes: {
        './ReactProjectOneApp': './src/bootstrap.js'
      },
      remotes: {
        reactProjectTwo: 'reactProjectTwo@http://localhost:8992/remoteEntry.js',
        vueTwoProject:"vueTwoProject@http://localhost:8993/remoteEntry.js",
        vueThreeProject:"vueThreeProject@http://localhost:8994/remoteEntry.js",
        appVue2:"appVue2@http://localhost:8994/appVue2RemoteEntry.js"
      },
      shared: packageJSON.dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}