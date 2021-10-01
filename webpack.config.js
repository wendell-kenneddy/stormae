/* eslint-disable  */
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: './src/scripts/index.ts',
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
  plugins: [
    new Dotenv({
      systemvars: true
    })
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist', 'assets', 'scripts')
  }
  // devtool: 'source-map'
};
