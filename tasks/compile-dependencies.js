#!/usr/bin/env node
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fse = require('fs-extra');
const os = require('os');
const path = require('path');

const temp = path.join(os.tmpdir(), 'rb-compile-dependencies');

try {
  // Ensures that we start from a clean state
  fse.removeSync(temp);
  fse.mkdirSync(temp);

  // Extract the dependencies from react-scripts (which is a workspace)
  // eslint-disable-next-line global-require, prefer-destructuring
  const dependencies = require('pd-react-scripts/package.json').devDependencies;
  const descriptors = Object.keys(dependencies).map(
    (dep) => `${dep}@${dependencies[dep]}`,
  );

  const deps = `module.exports = ${JSON.stringify(descriptors, null, 2)};`;

  fse.writeFileSync(path.join(temp, 'dependencies.js'), deps);

  // Store the generated dependencies in react-boilerplate
  // We can't store it inside react-scripts, because we need it even before
  // react-scripts is installed
  fse.copySync(
    path.join(temp, 'dependencies.js'),
    path.join(
      __dirname,
      '..',
      'packages',
      'react-boilerplate',
      'dependencies.js',
    ),
  );
} finally {
  fse.removeSync(temp);
}
