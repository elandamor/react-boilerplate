/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const paths = require('../../paths');

const appComponents = fs.readdirSync(paths.appComponents);
const appContainers = fs.readdirSync(paths.appContainers);
const appPages = fs.readdirSync(paths.appPages);
const components = appComponents.concat(appContainers).concat(appPages);

function componentExists(comp) {
  return components.indexOf(comp) >= 0;
}

module.exports = componentExists;
