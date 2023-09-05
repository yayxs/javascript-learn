/**
 * math 所有的属性和方法是静态的
 * 全精度浮点数来定义
 */

function log() {
  console.log('欧拉常数', Math.E) // app.js:7 2.718281828459045
  console.log('2的自然数对数', Math.LN2) // 0.6931471805599453
  console.log('10的自然数对数', Math.LN10) // 2.302585092994046
}
// log()

function getData() {
  console.log('-0变为0', Math.abs(-0))
}

getData()
