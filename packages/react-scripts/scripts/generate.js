const { execSync } = require('child_process');
const path = require('path');

const args = process.argv.slice(2);
const script = path.join(__dirname, '../internals/generators/index.js');

function initGenerator() {
  try {
    execSync(
      `plop --plopfile ${script} ${args[1] || ''}`,
      { stdio: 'inherit' }
    );
    return true;
  } catch (e) {
    return false;
  }
}

initGenerator();

