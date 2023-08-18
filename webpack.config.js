const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.join(__dirname, 'public', 'index.html'),
			favicon: path.join(__dirname, 'public', 'favicon.ico'),
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'src/assets/images',
					to: 'images',
				},
			],
		}),
	],
	devServer: {
		historyApiFallback: true,
		static: [
			{
				directory: path.join(__dirname, 'build'),
				watch: true,
			},
		],
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'images/[name].[hash].[ext]',
				},
			},
			{
				test: /\.(mp4|webm)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'videos/[name].[hash].[ext]',
				},
			},
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx', '.ts', '.tsx', '.css'],
	},
};
