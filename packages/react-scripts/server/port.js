const argv = require('./argv');

const isProd = process.env.NODE_ENV === 'production';
const PORT = !isProd ? '3000' : '3001';

module.exports = parseInt(argv.port || process.env.PORT || PORT, 10);
