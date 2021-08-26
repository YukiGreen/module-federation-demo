const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除 dist 目录
const CopyPlugin = require('copy-webpack-plugin'); // 处理静态资源
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 处理模板页面
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 打包css文件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const Mfp = require('webpack').container.ModuleFederationPlugin;

// webpack的基本配置
module.exports = {
  entry: './src/main.js', // 获取入口配置
  output: {
    filename: 'js/[name].[chunkhash:5].js', // js 输出到 dist/js/xxx
    // publicPath: '/', // 公用的公共路径 /
    path: path.resolve(__dirname, 'dist'), // 输出目录为 dist
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'), // 别名 @ = src目录
      _: __dirname, // 别名 _ = 工程根目录
    },
    fallback: {
      path: require.resolve('path-browserify'),
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
      crypto: require.resolve('crypto-browserify'),
      fs: false,
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      timers: require.resolve('timers-browserify'),
    },
  },
  stats: {
    colors: true, // 打包时使用不同的颜色区分信息
    modules: false, // 打包时不显示具体模块信息
    entrypoints: false, // 打包时不显示入口模块信息
    children: false, // 打包时不显示子模块信息
  },
  module: {
    rules: [
      {
        // 各种图片、字体文件，均交给 url-loader 处理
        test: /\.(png)|(gif)|(jpg)|(svg)|(bmp)|(eot)|(woff)|(ttf)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'static/[name].[hash:5].[ext]',
              esModule: false,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        // 所有的 css 和 pcss 文件均交给 postcss 处理
        test: /\.(css)|(pcss)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: '#1890ff',
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      { test: /\.js$/, use: 'babel-loader' },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser',
    }),
    new CleanWebpackPlugin(), // 应用 清除输出目录 插件
    new CopyPlugin({
      // 应用 复制文件 插件
      patterns: [
        {
          from: path.resolve(__dirname, 'public'), // 将public目录中的所有文件
          to: './', // 复制到 输出目录 的根目录
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './public/index1.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      // 打包 css 代码 到文件中
      filename: 'css/[name].css',
      chunkFilename: 'css/common.[hash:5].css', // 针对公共样式的文件名
    }),
    new VueLoaderPlugin(),
    new Mfp({
      name: 'app2',
      filename: "remoteEntry2.js",
      // exposes: {
      //   "./appHome": "./src/App.vue"
      // },
      // remotes: {
      //   app1: 'app1@http://localhost:8889/dist/remoteEntry1.js',
      //   // app1: 'app1@http://localhost:8888/remoteEntry1.js',
      // },
    })
  ],
};
