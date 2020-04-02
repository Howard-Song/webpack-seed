/*
 * @Author: yoo
 * @Date: 2020-04-02 10:36:38
 * @LastEditTime: 2020-04-02 16:45:21
 * @LastEditors: yoo
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  devtool: 'null',
  entry: __dirname + "/app/main.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle-[hash].js"
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true, // 开启缓存
        parallel: true, // 支持多进程
        sourceMap: true,
      }),
    ]
  },
  devServer: {
    contentBase: "./public",
    historyApiFallback: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-react", "@babel/preset-env"
            ]
          }
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]'
              },
            }
          },
          {
            loader: "postcss-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('JesseHeisenberg版权所有，翻版必究'),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.html"//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin("styles.css"),
    new CleanWebpackPlugin()
  ],
}