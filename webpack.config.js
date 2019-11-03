const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconWebpackPlugin = require('favicons-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'example/src/index.html'),
  filename: './index.html'
});

const favicon = new FaviconWebpackPlugin({
  logo: `./static/favicon/logo.png`,
  prefix: 'favicon/',
  emitStats: false,
  inject: true,
  outputPath: '/favicon',
  background: '#fff',
  cache: true,
  favicons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: true,
    firefox: true,
    opengraph: true,
    twitter: false,
    yandex: false,
    windows: false,
  },
});

module.exports = {
  devtool: 'cheap-source-map',

  entry: path.join(__dirname, 'example/src/index.js'),

  output: {
    path: path.join(__dirname, 'example/dist'),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    port: 3000,
    open: true,
    inline: true,
  },

  plugins: [htmlWebpackPlugin, favicon],
};
