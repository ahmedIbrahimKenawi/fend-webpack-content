const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: './src/client/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_mdules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader'
      },
    ]
  }
}