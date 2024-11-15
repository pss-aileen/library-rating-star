const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './lib/index.ts',
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ratingstar.bundle.js',
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template: "./index.html"
    }
  )],
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};
