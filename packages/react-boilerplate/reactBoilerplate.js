/* eslint-disable consistent-return, no-console, no-use-before-define */

/**
 * Copyright (c) 2018-present, Thandolwethu Mpofu.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// const validateProjectName = require('validate-npm-package-name');
const chalk = require('chalk');
const commander = require('commander');
// const fs = require('fs-extra');
// const path = require('path');
// const { execSync } = require('child_process');
// const spawn = require('cross-spawn');
// const semver = require('semver');
// const dns = require('dns');
// const tmp = require('tmp');
// const { unpack } = require('tar-pack');
// const url = require('url');
// const hyperquest = require('hyperquest');
const envinfo = require('envinfo');
// const os = require('os');

const createApp = require('./helpers/createApp');

const packageJson = require('./package.json');

let projectName;

const program = new commander.Command(packageJson.name)
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')} [options]`)
  .action((name) => {
    projectName = name;
  })
  .option('--verbose', 'print additional logs')
  .option('--info', 'print environment debug info')
  .option('--use-npm')
  .allowUnknownOption()
  .on('--help', () => {
    console.log(`    Only ${chalk.green('<project-directory>')} is required.`);
    console.log();
    console.log(
      `    A custom ${chalk.cyan('--scripts-version')} can be one of:`
    );
    console.log(`      - a specific npm version: ${chalk.green('0.8.2')}`);
    console.log(`      - a specific npm tag: ${chalk.green('@next')}`);
    console.log(
      `      - a custom fork published on npm: ${chalk.green(
        'my-react-scripts'
      )}`
    );
    console.log(
      `      - a local path relative to the current working directory: ${chalk.green(
        'file:../my-react-scripts'
      )}`
    );
    console.log(
      `      - a .tgz archive: ${chalk.green(
        'https://mysite.com/my-react-scripts-0.8.2.tgz'
      )}`
    );
    console.log(
      `      - a .tar.gz archive: ${chalk.green(
        'https://mysite.com/my-react-scripts-0.8.2.tar.gz'
      )}`
    );
    console.log(
      `    It is not needed unless you specifically want to use a fork.`
    );
    console.log();
    console.log(
      `    If you have any problems, do not hesitate to file an issue:`
    );
    console.log(
      `      ${chalk.cyan(
        'https://github.com/elandamor/react-boilerplate/issues/new'
      )}`
    );
    console.log();
  })
  .parse(process.argv);

if (program.info) {
  console.log(chalk.bold('\nEnvironment Info:'));
  return envinfo
    .run(
      {
        System: ['OS', 'CPU'],
        Binaries: ['Node', 'npm', 'Yarn'],
        Browsers: ['Chrome', 'Edge', 'Internet Explorer', 'Firefox', 'Safari'],
        npmPackages: ['react', 'react-dom', 'react-scripts'],
        npmGlobalPackages: ['create-react-app'],
      },
      {
        clipboard: false,
        duplicates: true,
        showNotFound: true,
      }
    )
    .then(console.log);
}

if (typeof projectName === 'undefined') {
  console.error('Please specify the project directory:');
  console.log(
    `  ${chalk.cyan(program.name())} ${chalk.green('<project-directory>')}`
  );
  console.log();
  console.log('For example:');
  console.log(`  ${chalk.cyan(program.name())} ${chalk.green('my-react-app')}`);
  console.log();
  console.log(
    `Run ${chalk.cyan(`${program.name()} --help`)} to see all options.`
  );
  process.exit(1);
}

const hiddenProgram = new commander.Command()
  .option(
    '--internal-testing-template <path-to-template>',
    '(internal usage only, DO NOT RELY ON THIS) ' +
      'use a non-standard application template'
  )
  .parse(process.argv);

createApp(
  projectName,
  program.verbose,
  program.scriptsVersion,
  program.useNpm,
  program.usePnp,
  program.typescript,
  hiddenProgram.internalTestingTemplate
);
