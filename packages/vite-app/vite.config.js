import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.tsx'),
			fileName: 'index',
			formats: ['cjs'],
		},
		commonjsOptions: {
			include: [/babel-lib/, /esbuild-lib/, /node_modules/, /vite-lib/, /webpack-lib/],
		},
	},
	optimizeDeps: {
		include: [/babel-lib/, /esbuild-lib/, /vite-lib/, /webpack-lib/],
	},
});
