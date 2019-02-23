const { unpack } = require('tar-pack');

function extractStream(stream, dest) {
  return new Promise((resolve, reject) => {
    stream.pipe(
      unpack(dest, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(dest);
        }
      }),
    );
  });
}

module.exports = extractStream;
