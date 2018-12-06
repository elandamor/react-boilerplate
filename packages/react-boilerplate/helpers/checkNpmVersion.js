const { execSync } = require('child_process');
const semver = require('semver');

function checkNpmVersion() {
  let hasMinNpm = false;
  let npmVersion = null;
  try {
    npmVersion = execSync('npm --version')
      .toString()
      .trim();
    hasMinNpm = semver.gte(npmVersion, '6.0.0');
  } catch (err) {
    // ignore
  }
  return {
    hasMinNpm,
    npmVersion,
  };
}

module.exports = checkNpmVersion;
