/* eslint-disable consistent-return, import/order */

const express = require('express');
const { execSync } = require('child_process');
const path = require('path');
const logger = require('./logger');

const argv = require('./argv');
const port = require('./port');
const setup = require('./middlewares/frontendMiddleware');

const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? require('ngrok')
    : false;
const paths = require('../internals/paths');
const checkRequiredFiles = require('../utils/checkRequiredFiles');

const app = express();

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);

// In production generate required files if missing
if (!isDev && !checkRequiredFiles([(paths.appBuild)], { silent: true })) {
  const command = `node ${path.join(__dirname, '../bin/react-scripts.js')} build --silent`;

  try {
    execSync(command, { stdio: 'inherit' });
  } catch (e) {
    process.exit(1);
  }
}

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: paths.appBuild,
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// Start your app.
app.listen(port, host, async (err) => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost);
  }
});
