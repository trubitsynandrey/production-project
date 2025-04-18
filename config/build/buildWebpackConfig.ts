import path from 'path';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import { BuildOptions } from './types/config';
import webpack from 'webpack'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  return {
    mode: options.mode,
    entry: options.paths.entry,
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResolvers(),
    output: {
      filename: "[name].[contenthash].js",
      path: options.paths.build,
      clean: true,
    },
    plugins: buildPlugins(options.paths.html),
  }
}