/* eslint-disable no-console */
const chalk = require('chalk');
const fs = require('fs');
const os = require('os');
const path = require('path');

const makeCaretRange = require('./makeCaretRange');

function setCaretRangeForRuntimeDeps(packageName) {
  const packagePath = path.join(process.cwd(), 'package.json');
  // eslint-disable-next-line global-require, no-shadow
  const packageJson = require(packagePath);

  if (typeof packageJson.dependencies === 'undefined') {
    console.error(chalk.red('Missing dependencies in package.json'));
    process.exit(1);
  }

  const packageVersion = packageJson.dependencies[packageName];
  if (typeof packageVersion === 'undefined') {
    console.error(chalk.red(`Unable to find ${packageName} in package.json`));
    process.exit(1);
  }

  makeCaretRange(packageJson.dependencies, 'react');
  makeCaretRange(packageJson.dependencies, 'react-dom');

  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + os.EOL);
}

module.exports = setCaretRangeForRuntimeDeps;
