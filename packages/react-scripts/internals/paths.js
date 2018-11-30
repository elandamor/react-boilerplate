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

// @remove-on-eject-begin
const resolveOwn = (relativePath) => path.resolve(__dirname, '..', relativePath);

// config before eject: we're in ./node_modules/pd-react-scripts/internals/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appComponents: resolveApp('app/components'),
  appContainers: resolveApp('app/containers'),
  appHtml: resolveApp('app/index.html'),
  appIcon: resolveApp('app/images/icon-512x512.png'),
  appIndexJs: resolveApp('app/app.tsx'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('app'),
  appTsConfig: resolveApp('tsconfig.json'),
};

const ownPackageJson = require('../package.json');

const reactScriptsPath = resolveApp(`node_modules/${ownPackageJson.name}`);
const reactScriptsLinked =
  fs.existsSync(reactScriptsPath) &&
  fs.lstatSync(reactScriptsPath).isSymbolicLink();

const publishedPath = path.join('node_modules', 'pd-react-scripts', 'internals');
const reactScriptsPublished = __dirname.indexOf(publishedPath) !== -1;

// config before publish: we're in ./internals
if (!reactScriptsLinked && !reactScriptsPublished) {
  module.exports = {
    dotenv: resolveOwn('template/.env'),
    appPath: resolveApp('.'),
    appBuild: resolveOwn('build'),
    appComponents: resolveApp('template/app/components'),
    appContainers: resolveApp('template/app/containers'),
    appHtml: resolveOwn('template/app/index.html'),
    appIcon: resolveApp('template/app/images/icon-512x512.png'),
    appIndexJs: resolveOwn('template/app/app.tsx'),
    appPackageJson: resolveOwn('package.json'),
    appSrc: resolveOwn('template/app'),
    appTsConfig: resolveOwn('template/tsconfig.json'),
  };
}
// @remove-on-eject-end
