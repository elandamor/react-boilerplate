/* eslint-disable no-console */

// Do this as the first thing so that any code reading it knows the right env.
process.env.NODE_ENV = 'production';

const chalk = require('chalk');
const webpack = require('webpack');
const paths = require('../internals/paths');
const config = require('../internals/webpack/webpack.prod');
const checkRequiredFiles = require('../utils/checkRequiredFiles');
const FileSizeReporter = require('../utils/FileSizeReporter');

const {
  measureFileSizesBeforeBuild,
  printFileSizesAfterBuild,
} = FileSizeReporter;

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

// Warn and crash if required files are missing
if (!checkRequiredFiles([paths.appHtml, paths.appIndexJs])) {
  process.exit(1);
}

const args = process.argv.slice(2);

const compiler = webpack(config);

console.log('Creating an optimized production build...');

compiler.run((err, stats) => {
  if (err) {
    console.log(chalk.red('An error occured during compilation.'));
    return false;
  }

  console.log(chalk.green('Compiled successfully.'));

  if (args.includes('--silent')) {
    return true;
  }

  measureFileSizesBeforeBuild(paths.appBuild).then((previousFileSizes) => {
    console.log();
    console.log('File sizes after gzip:');
    console.log();
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
