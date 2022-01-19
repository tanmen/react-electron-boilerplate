'use strict';

const paths = require('../paths');

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  return {
    target: 'electron-main',
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    entry: paths.electronMainJs,
    output: {
      path: paths.appBuild,
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        }
      ]
    },
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.ts', '.js', '.json']
    }
  }
};
