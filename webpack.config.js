const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './lib/index.js',
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ratingstar.bundle.js',
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: 'production',
};
