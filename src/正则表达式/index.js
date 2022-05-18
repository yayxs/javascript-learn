
/** 字符串 vs 正则 */

const testStr = `2022-12-12 JavaScript` 

const res = testStr.match(/Java(Script)/)

console.log(res[0]); // 完全匹配
console.log(res[1]) // 第一个分组

