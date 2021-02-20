const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'example/src/index.html'),
  filename: './index.html',
});

module.exports = {
  devtool: 'cheap-source-map',

  entry: path.join(__dirname, 'example/src/index.js'),

  output: {
    path: path.join(__dirname, 'example/dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      }, {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/img/',
          },
        },
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    mainFiles: ['index', 'Index'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },

  devServer: {
    port: 3000,
    open: true,
    inline: true,
  },

  plugins: [htmlWebpackPlugin],
};
