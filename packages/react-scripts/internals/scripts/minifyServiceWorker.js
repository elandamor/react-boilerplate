const UglifyJS = require('uglify-js');
const fs = require('fs');
const path = require('path');

const serviceworkerPath = path.resolve('build/sw.js');
const code = fs.readFileSync(serviceworkerPath, 'utf-8');

const minified = UglifyJS.minify(code, {
  // options taken from https://github.com/NekR/offline-plugin/blob/master/src/service-worker.js#L71
  compress: {
    warnings: false,
    dead_code: true,
    drop_console: true,
    unused: true,
  },

  output: {
    comments: false,
  },
});

fs.writeFileSync(serviceworkerPath, minified.code);
