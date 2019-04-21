// @remove-on-eject-begin
/**
 * Copyright (c) 2018-present, Thandolwethu Mpofu.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
const path = require('path');
const fs = require('fs');

// Make sure any symlinks in the project folder are resolved:
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const moduleFileExtensions = [
  'web.mjs',
  'mjs',
  'web.js',
  'js',
  'web.ts',
  'ts',
  'web.tsx',
  'tsx',
  'json',
  'web.jsx',
  'jsx',
];

// Resolve file paths in the same order as webpack
const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find((extension) =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  );

  if (extension) {
    return resolveFn(`${filePath}.${extension}`);
  }

  return resolveFn(`${filePath}.js`);
};

// @remove-on-eject-begin
const resolveOwn = (relativePath) =>
  path.resolve(__dirname, '..', relativePath);

// config before eject: we're in ./node_modules/pd-react-scripts/internals/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appComponents: resolveApp('src/components'),
  appContainers: resolveApp('src/containers'),
  appHtml: resolveApp('src/index.html'),
  appIcon: resolveApp('src/images/icon-512x512.png'),
  appIndexJs: resolveApp('src/index.tsx'),
  appNodeModules: resolveApp('node_modules'),
  appPackageJson: resolveApp('package.json'),
  appPages: resolveApp('src/pages'),
  appSrc: resolveApp('src'),
  appTsConfig: resolveApp('tsconfig.json'),
  testsSetup: resolveModule(resolveApp, 'src/setupTests'),
  // These properties only exist before ejecting:
  ownPath: resolveOwn('.'),
  ownNodeModules: resolveOwn('node_modules'), // This is empty on npm 3
};

const ownPackageJson = require('../package.json');

const reactScriptsPath = resolveApp(`node_modules/${ownPackageJson.name}`);
const reactScriptsLinked =
  fs.existsSync(reactScriptsPath) &&
  fs.lstatSync(reactScriptsPath).isSymbolicLink();

// config before publish: we're in ./packages/react-scripts/internals
if (
  !reactScriptsLinked &&
  __dirname.indexOf(path.join('packages', 'react-scripts', 'internals')) !== -1
) {
  module.exports = {
    dotenv: resolveOwn('template/.env'),
    appPath: resolveApp('.'),
    appBuild: resolveOwn('template/build'),
    appComponents: resolveApp('template/src/components'),
    appContainers: resolveApp('template/src/containers'),
    appHtml: resolveOwn('template/src/index.html'),
    appIcon: resolveApp('template/src/images/icon-512x512.png'),
    appIndexJs: resolveOwn('template/src/index.tsx'),
    appNodeModules: resolveOwn('node_modules'),
    appPackageJson: resolveOwn('package.json'),
    appPages: resolveApp('template/src/pages'),
    appSrc: resolveOwn('template/src'),
    appTsConfig: resolveOwn('template/tsconfig.json'),
    testsSetup: resolveModule(resolveOwn, 'template/src/setupTests'),
    // These properties only exist before ejecting:
    ownPath: resolveOwn('.'),
    ownNodeModules: resolveOwn('node_modules'),
  };
}
// @remove-on-eject-end
