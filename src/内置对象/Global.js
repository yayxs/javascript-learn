/**
 * 由于ECMAScript 实现
 * Object Array String Global Math
 * Global 对象作为一种兜底对象
 * 在全局作用域中定义的变量和函数都会成为Global对象的属性
 * 编码encodeURI 让浏览器理解它们
 * window 对象实现Global对象的代理
 */

let s = 'https://zh.javascript.info/string'
const ret1 = encodeURI(s) // 整个URL编码
const ret2 = encodeURIComponent('string')
