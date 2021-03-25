const basePath = process.env.NODE_ENV === 'production' ? '/repo' : '';

export default {
  basePath,
  assetPrefix: `${basePath}/`
};
