'use strict';

const ignoredFiles = require('react-dev-utils/ignoredFiles');
const paths = require('../paths');

module.exports = {
  // Enable gzip compression of generated files.
  compress: true,
  // Silence WebpackDevServer's own logs since they're generally not useful.
  // It will still show compile warnings and errors with this setting.
  clientLogLevel: 'none',
  // Reportedly, this avoids CPU overload on some systems.
  // https://github.com/facebook/create-react-app/issues/293
  // src/node_modules is not ignored to support absolute imports
  // https://github.com/facebook/create-react-app/issues/1065
  watchOptions: {
    ignored: ignoredFiles(paths.electronSrc),
  },
  overlay: false
}
