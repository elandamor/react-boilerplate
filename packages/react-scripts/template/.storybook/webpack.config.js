const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          // disable type checker - we will use it in fork plugin
          transpileOnly: true,
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
