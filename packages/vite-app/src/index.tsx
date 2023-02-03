import { shouldExist as babelShouldExist } from 'babel-lib';
import { shouldExist as esBuildShouldExist } from 'esbuild-lib';
import { shouldExist as viteShouldExist } from 'vite-lib';
import { shouldExist as rollupShouldExist } from 'rollup-lib';
import { shouldExist as webpackShouldExist } from 'webpack-lib';

babelShouldExist();
esBuildShouldExist();
rollupShouldExist();
viteShouldExist();
webpackShouldExist();
