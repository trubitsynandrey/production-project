import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

export function buildPlugins(htmlPath: string): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: htmlPath,
    }),
    new webpack.ProgressPlugin(),
  ];
}
