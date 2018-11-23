const { execSync } = require('child_process');

function initBuild() {
  try {
    execSync(
      'cross-env NODE_ENV=production webpack --config internals/webpack/webpack.prod.js --color -p --progress --hide-modules --display-optimization-bailout',
      { stdio: 'inherit' }
    );
    return true;
  } catch (e) {
    return false;
  }
}

initBuild();
