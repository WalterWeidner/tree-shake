const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, './src/index.ts'),
	mode: 'production',
	devtool: 'source-map',
	// optimization: {
	// 	usedExports: true,
	// 	innerGraph: true,
	// 	sideEffects: true,
	// },
	module: {
		rules: [
			{
				include: path.resolve(__dirname, './src'),
				test: /\.(ts)$/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
						},
					},
				],
			},
		],
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './dist'),
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: path.resolve('./dist/index.html'),
			template: path.resolve('./src/index.html'),
		}),
	],
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
	},
};
