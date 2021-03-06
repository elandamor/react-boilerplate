/* eslint-disable no-console */
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

const checkIfOnline = require('./checkIfOnline');
const checkNodeVersion = require('./checkNodeVersion');
const executeNodeScript = require('./executeNodeScript');
const getInstallPackage = require('./getInstallPackage');
const getPackageName = require('./getPackageName');
const install = require('./install');
const setCaretRangeForRuntimeDeps = require('./setCaretRangeForRuntimeDeps');

// TODO: Dependencies should be in their own file, for better maintainability
const dependencies = [
  "apollo-cache-inmemory@1.3.12",
  "apollo-cache-persist@0.1.1",
  "apollo-client@2.4.8",
  "apollo-link@1.2.6",
  "apollo-link-http@1.5.9",
  "apollo-link-state@0.4.2",
  "classnames@2.2.6",
  "fontfaceobserver@2.1.0",
  "graphql@14.0.2",
  "graphql-tag@2.10.0",
  "history@4.7.2",
  "hoist-non-react-statics@3.2.1",
  "intl@1.2.5",
  "localforage@1.7.3",
  "react@16.7.0",
  "react-apollo@2.3.3",
  "react-dom@16.7.0",
  "react-feather@1.1.5",
  "react-helmet@5.2.0",
  "react-measure@2.1.3",
  "react-router-dom@4.3.1",
  "sanitize.css@8.0.0",
  "styled-components@4.1.3",
  "typeface-merriweather@0.0.54",
  "typeface-montserrat@0.0.54",
  "whatwg-fetch@3.0.0"
];

const devDependencies = [
  "pd-react-scripts"
];

function run(
  root,
  appName,
  version,
  verbose,
  originalDirectory,
  template,
  useYarn,
  usePnp
) {
  const packageToInstall = getInstallPackage(version, originalDirectory);
  const allDependencies = {
    dependencies,
    devDependencies
  };

  console.log('Installing packages. This might take a couple of minutes.');
  console.log();
  getPackageName(packageToInstall)
    .then((packageName) =>
      checkIfOnline(useYarn).then((isOnline) => ({
        isOnline,
        packageName,
      })))
    .then((info) => {
      const { isOnline, packageName } = info;

      return install(
        root,
        useYarn,
        usePnp,
        allDependencies,
        verbose,
        isOnline
      ).then(() => packageName);
    })
    .then(async (packageName) => {
      checkNodeVersion(packageName);
      setCaretRangeForRuntimeDeps(packageName);

      const nodeArgs = [];

      await executeNodeScript(
        {
          cwd: process.cwd(),
          args: nodeArgs,
        },
        [root, appName, verbose, originalDirectory, template],
        `
        var init = require('${packageName}/scripts/init.js');
        init.apply(null, JSON.parse(process.argv[1]));
      `
      );
    })
    .catch((reason) => {
      console.log();
      console.log('Aborting installation.');
      if (reason.command) {
        console.log(`  ${chalk.cyan(reason.command)} has failed.`);
      } else {
        console.log(chalk.red('Unexpected error. Please report it as a bug:'));
        console.log(reason);
      }
      console.log();

      // On 'exit' we will delete these files from target directory.
      const knownGeneratedFiles = ['package.json', 'yarn.lock', 'node_modules'];
      const currentFiles = fs.readdirSync(path.join(root));
      currentFiles.forEach((file) => {
        knownGeneratedFiles.forEach((fileToMatch) => {
          // This remove all of knownGeneratedFiles.
          if (file === fileToMatch) {
            console.log(`Deleting generated file... ${chalk.cyan(file)}`);
            fs.removeSync(path.join(root, file));
          }
        });
      });
      const remainingFiles = fs.readdirSync(path.join(root));
      if (!remainingFiles.length) {
        // Delete target folder if empty
        console.log(
          `Deleting ${chalk.cyan(`${appName}/`)} from ${chalk.cyan(
            path.resolve(root, '..')
          )}`
        );
        process.chdir(path.resolve(root, '..'));
        fs.removeSync(path.join(root));
      }
      console.log('Done.');
      process.exit(1);
    });
}

module.exports = run;
