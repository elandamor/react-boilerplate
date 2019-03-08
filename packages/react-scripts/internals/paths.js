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
const resolveOwn = (relativePath) =>
  path.resolve(__dirname, '..', relativePath);

// config before eject: we're in ./node_modules/pd-react-scripts/internals/
module.exports = {
  dotenv: resolveApp('.env'),
  appPath: resolveApp('.'),
  appBuild: resolveApp('build'),
  appComponents: resolveApp('app/components'),
  appContainers: resolveApp('app/containers'),
  appHtml: resolveApp('app/index.html'),
  appIcon: resolveApp('app/images/icon-512x512.png'),
  appIndexJs: resolveApp('app/app'),
  appNodeModules: resolveApp('node_modules'),
  appPackageJson: resolveApp('package.json'),
  appPages: resolveApp('app/pages'),
  appSrc: resolveApp('app'),
  appTsConfig: resolveApp('tsconfig.json'),
  yarnLockFile: resolveApp('yarn.lock'),
  // These properties only exist before ejecting:
  ownPath: resolveOwn('.'),
  ownNodeModules: resolveOwn('node_modules'), // This is empty on npm 3
  appTypeDeclarations: resolveApp('app/app-env.d.ts'),
  ownTypeDeclarations: resolveOwn('lib/app.d.ts'),
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
    appComponents: resolveApp('template/app/components'),
    appContainers: resolveApp('template/app/containers'),
    appHtml: resolveOwn('template/app/index.html'),
    appIcon: resolveApp('template/app/images/icon-512x512.png'),
    appIndexJs: resolveOwn('template/app/app'),
    appNodeModules: resolveOwn('node_modules'),
    appPackageJson: resolveOwn('package.json'),
    appPages: resolveApp('template/app/pages'),
    appSrc: resolveOwn('template/app'),
    appTsConfig: resolveOwn('template/tsconfig.json'),
    yarnLockFile: resolveOwn('template/yarn.lock'),
    // These properties only exist before ejecting:
    ownPath: resolveOwn('.'),
    ownNodeModules: resolveOwn('node_modules'),
    appTypeDeclarations: resolveOwn('template/app/app-env.d.ts'),
    ownTypeDeclarations: resolveOwn('lib/app.d.ts'),
  };
}
// @remove-on-eject-end
