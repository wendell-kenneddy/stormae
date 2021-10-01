/* eslint-disable  */
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/scripts/sw.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'sw.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map'
};
