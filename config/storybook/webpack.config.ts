/* eslint-disable no-param-reassign */
import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config }: {config: webpack.Configuration}) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
  };

  config.module = config.module || { rules: [] };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.module?.rules?.push(buildCssLoaders(true));

  config.module.rules = config.module.rules?.map((rule) => {
    if (typeof rule === 'object' && /svg/.test(rule?.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  }) || [];

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  });

  return config;
};
