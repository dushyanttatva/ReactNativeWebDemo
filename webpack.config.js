const HtmlWebPackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './index.web.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [{ loader: 'file-loader' }],
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules\/(?!(react-native))\//,
        use: { loader: 'babel-loader' },
      }
    ],
  },
  plugins: [new HtmlWebPackPlugin({
      template: './public/index.html'
  })],
  resolve: {
    alias: { 'react-native$': 'react-native-web' },
    extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.js'],
  },
};