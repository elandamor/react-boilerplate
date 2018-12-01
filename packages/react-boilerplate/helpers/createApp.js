/* eslint-disable no-console */
const chalk = require('chalk');
const fs = require('fs-extra');
const os = require('os');
const path = require('path');
const semver = require('semver');

const checkAppName = require('./checkAppName');
const checkNpmVersion = require('./checkNpmVersion');
const checkThatNpmCanReadCwd = require('./checkThatNpmCanReadCwd');
const isSafeToCreateProjectIn = require('./isSafeToCreateProjectIn');
const run = require('./run');
const shouldUseYarn = require('./shouldUseYarn');

function createApp(
  name,
  verbose,
  version,
  useNpm,
  usePnp,
  useTypescript,
  template
) {
  const root = path.resolve(name);
  const appName = path.basename(root);

  checkAppName(appName);
  fs.ensureDirSync(name);
  if (!isSafeToCreateProjectIn(root, name)) {
    process.exit(1);
  }

  console.log(`Creating a new React app in ${chalk.green(root)}.`);
  console.log();

  // eslint-disable-next-line no-shadow
  const packageJson = {
    name: appName,
    version: '0.1.0',
    private: true,
  };
  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2) + os.EOL
  );

  const useYarn = useNpm ? false : shouldUseYarn();
  const originalDirectory = process.cwd();
  process.chdir(root);
  if (!useYarn && !checkThatNpmCanReadCwd()) {
    process.exit(1);
  }

  if (!semver.satisfies(process.version, '>=8.0.0')) {
    console.log(
      chalk.yellow(
        `You are using Node ${
          process.version
        } which is currently not supported.\n\n` +
          `Please update to Node 8 or higher.\n`
      )
    );
  }

  if (!useYarn) {
    const npmInfo = checkNpmVersion();
    if (!npmInfo.hasMinNpm) {
      if (npmInfo.npmVersion) {
        console.log(
          chalk.yellow(
            `You are using npm ${
              npmInfo.npmVersion
            } which is currently not supported.\n\n` +
              `Please update to npm 6 or higher.\n`
          )
        );
      }
    }
  }

  run(
    root,
    appName,
    version,
    verbose,
    originalDirectory,
    template,
    useYarn,
    usePnp,
    useTypescript
  );
}

module.exports = createApp;
