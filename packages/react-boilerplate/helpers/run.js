/* eslint-disable no-console */
const chalk = require('chalk');
const fs = require('fs-extra');
const path = require('path');

// Extract the dependencies from react-scripts (which is a workspace)
const reactScriptsDevDependencies = require('pd-react-scripts/package.json')
  .devDependencies;

const checkIfOnline = require('./checkIfOnline');
const checkNodeVersion = require('./checkNodeVersion');
const executeNodeScript = require('./executeNodeScript');
const getInstallPackage = require('./getInstallPackage');
const getPackageName = require('./getPackageName');
const install = require('./install');
const setCaretRangeForRuntimeDeps = require('./setCaretRangeForRuntimeDeps');

const dependencies = Object.keys(reactScriptsDevDependencies).map(
  (dep) => `${dep}@${reactScriptsDevDependencies[dep]}`
);
const devDependencies = ['pd-react-scripts'];

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
    devDependencies,
  };

  console.log('Installing packages. This might take a couple of minutes.');
  console.log();
  getPackageName(packageToInstall)
    .then((packageName) =>
      checkIfOnline(useYarn).then((isOnline) => ({ isOnline, packageName }))
    )
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
