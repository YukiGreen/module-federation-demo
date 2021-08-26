const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const packageJSON = require('./package.json');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: 'development',
  output: {
    // publicPath: 'http://localhost:8991/'
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
      filename: 'remoteEntryOne.js',
      exposes: {
        './ReactProjectOneApp': './src/bootstrap.js'
      },
      remotes: {
        reactProjectTwo: 'reactProjectTwo@http://localhost:8992/remoteEntry.js',
	vueTwoProject:"vueTwoProject@./dist/remoteEntry.js", // 启动服务器后或者是本地启动均可
        // vueTwoProject:"vueTwoProject@http://localhost:8991/dist/remoteEntry.js", // 使用本地启动可以
        // vueTwoProject:"vueTwoProject@http://localhost:8993/remoteEntry.js",
        vueThreeProject:"vueThreeProject@http://localhost:8994/remoteEntry.js",
        appVue2:"appVue2@http://localhost:8994/appVue2RemoteEntry.js"
      },
      shared: packageJSON.dependencies
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./public"),
          to: '',
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}