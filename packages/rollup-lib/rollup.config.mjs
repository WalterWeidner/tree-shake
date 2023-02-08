import postcss from 'rollup-plugin-postcss';
import styles from 'rollup-plugin-styles';

export default {
	input: 'src/index.mjs',
	output: {
		file: 'dist/index.js',
		format: 'es',
	},
	plugins: [
		// postcss({
		// 	modules: true,
		// }),
		styles({
			modules: true,
		}),
	],
};
