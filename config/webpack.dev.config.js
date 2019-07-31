/**
 * 开发配置
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: {
    index: [
      'react-hot-loader/patch',
      path.resolve(__dirname, '../src/index.tsx'),
    ],
  },
  devtool: 'cheap-module-eval-soure-map',
  // output: {
  //   // 输出目录
  //   path: path.resolve(__dirname, '../dist'),
  //   // 文件名称
  //   filename: 'bundle.js',
  //   chunkFilename: '[name].js',
  // },
  plugins: [
    //开启HMR(热替换功能,替换更新部分,不重载页面！) 相当于在命令行加 --hot
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, '../dist'),
    host: 'localhost', // 可以使用手机访问
    port: 3000,
    historyApiFallback: true, //  该选项的作用所有的404都连接到index.html
    proxy: {
      // 代理到后端的服务地址
      '/api': 'http://localhost:3000',
    },
  },
});
