
let str = `test JavaScript`

let res = str.match(/Java(Script)/)
console.log(res[0])
console.log(res[1])
console.log(res.length)

res = str.match(/Java(Script)/g)

console.log(res.length)

res = str.match(/html/)

console.log(res)
console.log(res && res.length)

/**
 * 分割字符串
 */
console.log('2022-12-12'.split(/-\s*/));
console.log('12:34'.split(':'))
console.log('123'.search(/2/))

/**
 * 搜索替换
 */

console.log('2022-12-12'.replace(/-/g,'/'));

let timeStr = '2022-05-18 10:58:32'

const today = new Date(timeStr)
console.log(today.getTime())