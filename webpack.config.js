const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevMode = process.env.NODE_ENV !== 'production'

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: isDevMode ? 'development' : 'production',
  entry: {
    background: './background.js',
    popup: './popup/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader' },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: 'icons', to: 'icons' }, { from: 'manifest.json' }],
    }),
    new HtmlWebpackPlugin({
      filename: 'popup',
      template: 'popup/popup.html',
      chunks: ['popup'],
    }),
  ],
}
