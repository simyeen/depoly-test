const paths = require('./paths');
const path = require('./paths');

module.exports = {
  mode: 'production',
  entry: paths.ssrIndexJs,
  target: 'node',

  output: {
    path: paths.ssrBuild,
    filename: 'server.js',
    chunkFilenmae: 'js/[name].chunk.js',
    publicPath: path.publicUrlOrPath,
  },
};
