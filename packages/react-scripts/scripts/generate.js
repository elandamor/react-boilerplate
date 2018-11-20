const { execSync } = require('child_process');

const args = process.argv.slice(2);

function initGenerator() {
  try {
    execSync(
      `plop --plopfile internals/generators/index.js ${args[1] || ''}`,
      { stdio: 'inherit' }
    );
    return true;
  } catch (e) {
    return false;
  }
}

initGenerator();

