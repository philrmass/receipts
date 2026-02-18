module.exports = (config) => {
  const isDev = Boolean(process.env.DEV);
  config.output.publicPath = isDev ? '' : '/receipts/';
};
