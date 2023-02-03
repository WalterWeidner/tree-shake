import postcss from 'rollup-plugin-postcss';

export default {
	input: 'src/index.mjs',
	output: {
		file: 'dist/index.js',
		format: 'es',
	},
	plugins: [
		postcss({
			modules: true,
		}),
	],
};
