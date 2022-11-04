import esbuild from 'esbuild';

esbuild
	.build({
		external: ['react', 'react-dom'],
		entryPoints: ['src/index.js'],
		outdir: 'dist/',
		bundle: true,
		sourcemap: true,
		minify: false,
		splitting: true,
		format: 'esm',
		define: { global: 'window' },
		target: ['es2020'],
	})
	.catch(() => process.exit(1));
