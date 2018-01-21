const path = require('path');

module.exports = {
	entry: './src/index.js',
	devtool: 'eval-source-map',
	output: {
		filename: 'bundle.js',
	},
	module: {
		rules: [
		{
			test: /\.css$/,
			use: [
			'style-loader',
			'css-loader'
			]
		}
		]
	}
};