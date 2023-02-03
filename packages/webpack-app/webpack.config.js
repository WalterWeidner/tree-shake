const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src/index.tsx'),
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
				test: /\.(ts|tsx)$/,
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
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.css'],
	},
};
