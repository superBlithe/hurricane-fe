'use strict';

const path = require('path');
const pkg = require('./package.json');
const name = `${pkg.name}`;

const resolve = dir => {
  return path.join(__dirname, './', dir);
};
// vue.config.js
module.exports = {
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  transpileDependencies: [],
  // 反向代理
  devServer: {
    port: 8888
  },
  configureWebpack: () => ({
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@assets': resolve('src/assets'),
        '@less': resolve('src/assets/less'),
        '@js': resolve('src/assets/js'),
        '@components': resolve('src/components'),
        '@mixins': resolve('src/mixins'),
        '@filters': resolve('src/filters'),
        '@store': resolve('src/store'),
        '@views': resolve('src/views'),

        // 文件别名
        services: resolve('src/services'),
        utils: resolve('node_modules/@liwb/cloud-utils/dist/cloud-utils.esm')
      }
    }
  })
};
