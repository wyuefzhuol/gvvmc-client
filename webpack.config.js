const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const isDev = process.env.NODE_ENV === 'development'

const config = {
  entry: path.join(__dirname, 'src/main.js'),
  output: {
    filename: 'bundle.js', // 文件输出
    path: path.join(__dirname, '/dist')
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    }),
    new HTMLPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg)/,
        use: ['file-loader']
      },
      {
        test: /\.(gif|jpg|jpeg|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  }
}
if (isDev) {
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8000,
    host: 'localhost',
    overlay: {
      errors: true
    },
    open: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}
module.exports = config
