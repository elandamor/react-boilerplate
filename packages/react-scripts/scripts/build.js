const { execSync } = require('child_process');
const { relative } = require('path');

const script = relative(process.cwd(), 'internals/webpack/webpack.prod.js');

function initBuild() {
  try {
    execSync(
      `cross-env NODE_ENV=production webpack --config ${script} --color -p --progress --hide-modules --display-optimization-bailout`,
      { stdio: 'inherit' }
    );
    return true;
  } catch (e) {
    return false;
  }
}

initBuild();
