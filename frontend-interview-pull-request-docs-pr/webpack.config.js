/* eslint-env node */
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/frontend-interviewing.js',
	output: {
		filename: 'frontend-interviewing.js',
		path: '/lib',
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				exclude: [path.resolve(__dirname, 'node_modules')],
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]',
						},
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins() {
								return [
									require('autoprefixer')
								];
							},
						},
					},
				],
			},
		],
	},
	resolve: {
		modules: [
			__dirname,
			'node_modules',
		],
	},
	plugins: [
		new CleanWebpackPlugin(['lib']),
	],
	devtool: 'source-map',
	devServer: {
		compress: true,
		port: 9000,
	},
};
