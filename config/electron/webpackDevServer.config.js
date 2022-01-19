'use strict';

const ignoredFiles = require('react-dev-utils/ignoredFiles');
const paths = require('../paths');

module.exports = {
  client: {
    logging: "none",
    overlay: true,
  },
  static: {
    watch: {
      ignored: ignoredFiles(paths.electronSrc),
    }
  },
  devMiddleware: {
    writeToDisk: true
  }
}
