// @remove-file-on-eject
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require, no-console */

// const fs = require('fs');
const chalk = require('chalk');
const paths = require('../internals/paths');

module.exports = (resolve, rootDir) => {
  // Use this instead of `paths.testsSetup` to avoid putting
  // an absolute filename into configuration after ejecting.
  // const setupTestsMatches = paths.testsSetup.match(/app\/setupTests\.(.+)/);
  // const setupTestsFileExtension =
  //   (setupTestsMatches && setupTestsMatches[1]) || 'js';
  // const setupTestsFile = fs.existsSync(paths.testsSetup)
  //   ? `<rootDir>/app/setupTests.${setupTestsFileExtension}`
  //   : undefined;

  // TODO: I don't know if it's safe or not to just use / as path separator
  // in Jest configs. We need help from somebody with Windows to determine this.
  const config = {
    // collectCoverageFrom: ['app/**/*.{ts,tsx}', '!app/**/*.d.ts'],

    // TODO: this breaks Yarn PnP on eject.
    // But we can't simply emit this because it'll be an absolute path.
    // The proper fix is to write jest.config.js on eject instead of a package.json key.
    // Then these can always stay as require.resolve()s.
    // resolver: isEjecting
    //   ? 'jest-pnp-resolver'
    //   : require.resolve('jest-pnp-resolver'),
    // setupFiles: [
    //   isEjecting
    //     ? 'react-app-polyfill/jsdom'
    //     : require.resolve('react-app-polyfill/jsdom'),
    // ],

    // setupTestFrameworkScriptFile: setupTestsFile,
    testMatch: [
      '<rootDir>/app/**/__tests__/**/*.{js,jsx,ts,tsx}',
      '<rootDir>/app/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
    ],
    testEnvironment: 'jsdom',
    testURL: 'http://localhost',
    transform: {
      "^.+\\.tsx?$": "ts-jest",
      '^.+\\.css$': resolve('internals/jest/cssTransform.js'),
      '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': resolve(
        'internals/jest/fileTransform.js'
      ),
    },
    transformIgnorePatterns: [
      '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$',
      '^.+\\.module\\.(css|sass|scss)$',
    ],
    moduleNameMapper: {
      '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
    },
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js",
      "jsx",
      "json",
      "node"
    ],
  };
  if (rootDir) {
    config.rootDir = rootDir;
  }
  const overrides = Object.assign({}, require(paths.appPackageJson).jest);
  const supportedKeys = [
    'collectCoverageFrom',
    'coverageReporters',
    'coverageThreshold',
    'globalSetup',
    'globalTeardown',
    'resetMocks',
    'resetModules',
    'snapshotSerializers',
    'watchPathIgnorePatterns',
  ];
  if (overrides) {
    supportedKeys.forEach((key) => {
      // eslint-disable-next-line no-prototype-builtins
      if (overrides.hasOwnProperty(key)) {
        config[key] = overrides[key];
        delete overrides[key];
      }
    });
    const unsupportedKeys = Object.keys(overrides);
    if (unsupportedKeys.length) {
      const isOverridingSetupFile =
        unsupportedKeys.indexOf('setupTestFrameworkScriptFile') > -1;

      if (isOverridingSetupFile) {
        console.error(
          chalk.red(
            `We detected ${ 
              chalk.bold('setupTestFrameworkScriptFile') 
              } in your package.json.\n\n` +
              `Remove it from Jest configuration, and put the initialization code in ${ 
              chalk.bold('app/setupTests.js') 
              }.\nThis file will be loaded automatically.\n`
          )
        );
      } else {
        console.error(
          chalk.red(
            `${'\nOut of the box, react-boilerplate only supports overriding ' +
              'these Jest options:\n\n'}${ 
              supportedKeys
                .map((key) => chalk.bold(`  \u2022 ${key}`))
                .join('\n') 
              }.\n\n` +
              `These options in your package.json Jest configuration ` +
              `are not currently supported by react-boilerplate:\n\n${ 
              unsupportedKeys
                .map((key) => chalk.bold(`  \u2022 ${key}`))
                .join('\n') 
              }\n\nIf you wish to override other Jest options, you need to ` +
              `eject from the default setup. You can do so by running ${ 
              chalk.bold('npm run eject') 
              } but remember that this is a one-way operation. ` +
              `You may also file an issue with react-boilerplate to discuss ` +
              `supporting more options out of the box.\n`
          )
        );
      }

      process.exit(1);
    }
  }
  return config;
};
