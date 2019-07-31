module.exports = function(api) {
  api.cache(true);

  const presets = [
    [
      '@babel/env',
      {
        targets: {
          edge: '17',
          firefox: '60',
          chrome: '67',
          safari: '11.1',
        },
        useBuiltIns: 'usage',
        corejs: '3',
      },
    ],
    '@babel/react',
    '@babel/typescript',
  ];

  // react-hot-loader在--hot基础上做了额外的处理，来保证状态可以存下来
  const plugins = [
    '@babel/transform-runtime',
    'react-hot-loader/babel',
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ];

  return {
    presets,
    plugins,
  };
};
