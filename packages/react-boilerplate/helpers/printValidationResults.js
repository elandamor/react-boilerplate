const chalk = require('chalk');

function printValidationResults(results) {
  if (typeof results !== 'undefined') {
    results.forEach((error) => {
      // eslint-disable-next-line no-console
      console.error(chalk.red(`  *  ${error}`));
    });
  }
}

module.exports = printValidationResults;
