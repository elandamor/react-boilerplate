/* eslint-disable no-console */
const chalk = require('chalk');
const webpack = require('webpack');
const paths = require('../internals/scripts/paths');
const config = require('../internals/webpack/webpack.prod');
const checkRequiredFiles = require('../utils/checkRequiredFiles');
const FileSizeReporter = require('../utils/FileSizeReporter');

const { measureFileSizesBeforeBuild, printFileSizesAfterBuild } = FileSizeReporter;

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

const compiler = webpack(config);

console.log('Creating an optimized production build...');

compiler.run((err, stats) => {
  if (err) {
    return false;
  }

  console.log(chalk.green('Compiled successfully.\n'));

  measureFileSizesBeforeBuild(paths.appBuild)
  .then((previousFileSizes) => {
    console.log('File sizes after gzip:\n');
    printFileSizesAfterBuild(
      stats,
      previousFileSizes,
      paths.appBuild,
      WARN_AFTER_BUNDLE_GZIP_SIZE,
      WARN_AFTER_CHUNK_GZIP_SIZE
    );
    console.log();    
  });

  return true;
});