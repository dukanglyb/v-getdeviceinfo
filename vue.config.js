const path = require('path');

function resolve(dir) {
  return path.resolve(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  pages: {
    index: {
      title: 'Vue JavaScript 获取设备信息',
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
  },
  css: {
    extract: false,
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        static: resolve('static'),
        components: resolve('src/components'),
        assets: resolve('src/assets'),
        views: resolve('src/views'),
      },
    },
    output: {
      libraryExport: 'default',
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule('js')
      .include.add('/src')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap((options) => options);
    
  },
  outputDir: 'lib',
  productionSourceMap: false,
  devServer: {
    port: 3000,
    hot: true,
    open: 'Google Chrome',
  },
};
