const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./config');

module.exports = merge(config, {
	module: {
		rules: [
			{
				test: /\.(sa|sc|c|le)ss$/,
				exclude: /node_modules/,
				use: [
					'style-loader', // 将 JS 字符串生成为 style 节点
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
		],
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		hot: true,
		open: true,
		port: 9000,
		overlay: {
			warnings: true,
			errors: true,
		},
	},
	devtool: 'cheap-eval-source-map', // enum
	mode: 'development',
});