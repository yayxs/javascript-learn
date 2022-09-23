/**
 * 自协调世界时 时间1970 之后285 616年的日期
 */

const d = Date()

/**
 * 获取此刻的ms时间戳
 */
const currTimeS = new Date().getTime()
const currTimeS1 = new Date().valueOf()
console.log(currTimeS === currTimeS1)

/**
 * 2022
 */
const y = new Date().getFullYear()

const y1 = new Date().getUTCFullYear()

console.log(typeof y)
console.log('date run')
