module.exports = function (api) {
  api.cache(true);

  const presets = ["@babel/preset-env","@babel/preset-react"];

  // react-hot-loader在--hot基础上做了额外的处理，来保证状态可以存下来
  const plugins = ['react-hot-loader/babel'];

  return {
    presets,
    plugins
  };
};
