import { ComponentShouldExist as BabelComponentShouldExist, shouldExist as babelShouldExist } from 'babel-lib';
import { ComponentShouldExist as EsBuildComponentShouldExist, shouldExist as esBuildShouldExist } from 'esbuild-lib';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { ComponentShouldExist as ViteComponentShouldExist, shouldExist as viteShouldExist } from 'vite-lib';
import { ComponentShouldExist as WebpackComponentShouldExist, shouldExist as webpackShouldExist } from 'webpack-lib';

babelShouldExist();
esBuildShouldExist();
viteShouldExist();
webpackShouldExist();

createRoot(document.getElementById('reactRoot')).render(
	<div>
		<BabelComponentShouldExist />
		<EsBuildComponentShouldExist />
		<ViteComponentShouldExist />
		<WebpackComponentShouldExist />
	</div>
);
