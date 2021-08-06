/*
 * @Description: 
 * @Version: 2.0
 * @Autor: liyb-d
 * @Date: 2021-08-06 10:29:33 +0800
 * @LastEditors: liyb-d
 * @LastEditTime: 2021-08-06 13:49:40 +0800
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    "@babel/preset-env",
    {
      "useBuiltIns": "entry"
    }
  ]
}
