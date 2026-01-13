const pathPrefix =
  process.env.NODE_ENV === 'production'
    ? '' // /docs?
    : '';

module.exports = {
  assetPrefix: pathPrefix,
  env: {
    pathPrefix,
  },
};
