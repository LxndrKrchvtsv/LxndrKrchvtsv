const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

dotenv.config();

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': JSON.stringify(process.env),
		}),
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
				exclude: /node_modules/,
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
