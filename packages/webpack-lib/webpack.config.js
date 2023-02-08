import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	entry: path.resolve(__dirname, './src/index.js'),
	mode: 'production',
	module: {
		rules: [
			{
				include: path.resolve(__dirname, './src'),
				test: /\.(js|ts|tsx)$/,
				use: ['babel-loader'],
			},
			{
				test: /\.css$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
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
	optimization: {
		minimize: false,
		mangleExports: false,
	},
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, './dist'),
		library: {
			type: 'module',
		},
		chunkFormat: 'module',
		module: true,
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
	},
	experiments: {
		outputModule: true,
	},
	devtool: false,
	target: 'es2020',
};
