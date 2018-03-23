const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: __dirname + "/src/main.js", //已多次提及的唯一入口文件
  output: {
    path: __dirname + "/dist",
    filename: "bundle-[hash].js"
  },
  devtool: 'none',
  devServer: {
    port: "8099",
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/
        use: {
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: __dirname + "/src/index.html" //new 一个这个插件的实例，并传入相关的参数
    }),
    new cleanWebpackPlugin(["dist"])
  ]
};
