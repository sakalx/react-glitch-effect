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
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},

	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			root: path.resolve(__dirname, 'src'),
			core: path.resolve(__dirname, 'src/__core__'),
		},
	},

	devServer: {
		port: 3000,
		open: true,
		inline: true,
	},

	plugins: [htmlWebpackPlugin],
};
