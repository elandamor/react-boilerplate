const { execSync } = require('child_process');

function getProxy() {
  if (process.env.https_proxy) {
    return process.env.https_proxy;
  }
  try {
    // Trying to read https-proxy from .npmrc
    const httpsProxy = execSync('npm config get https-proxy')
      .toString()
      .trim();
    return httpsProxy !== 'null' ? httpsProxy : undefined;
  } catch (e) {
    return false;
  }
}

module.exports = getProxy;
