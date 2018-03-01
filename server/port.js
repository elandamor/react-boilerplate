const argv = require('./argv');

const isDev = process.env.NODE_ENV === 'development';
const PORT = isDev ? '3000' : '3001';

module.exports = parseInt(argv.port || process.env.PORT || PORT, 10);
