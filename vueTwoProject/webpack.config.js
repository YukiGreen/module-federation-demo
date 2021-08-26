const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const packageJson = require("./package.json")

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  // 默认入口文件为main，可改名，比如app
  // output出口文件名不能和模块联邦导出的filename一样，否则报错
  // entry: {
  //   app: "./src/index.js"
  // },
  output: {
    publicPath: "dist/",
    // publicPath: "http://localhost:8993/",
    filename: "[name].[chunkhash].js"
  },
  resolve: {
    extensions: [".js", ".vue"]
  },
  devServer: {
    port: 8993,
    historyApiFallback: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [
          {
            loader: "file-loader"
          }
        ]
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.scss|\.css$/,
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"]
          }
        }
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "vueTwoProject",
      filename: "remoteEntry.js",
      exposes: {
        "./VueTwoProjectApp": "./src/bootstrap"
      },
      shared: packageJson.dependencies
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new VueLoaderPlugin()
  ]
}