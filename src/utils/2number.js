/**
 * Number 转型函数 用于任何数据类型
 * Number.parseInt Number.parseFloat
 */

/**
 * 1: true
 * 0 null false '' '  '
 * NaN undefined
 * @param {*} val
 */
function toNumber(val) {
  const ret = Number(val)
  if (isNaN(ret)) {
    console.log('not a number')
  } else {
    console.log(ret)
  }
}
// toNumber('   ')

/**
 *
 * @param {*} val
 * @returns NaN
 */
function toInt(val) {
  const ret = Number.parseInt(val, 10)
  console.log(ret)
}
// toInt('0xa')

function plus2Number(val) {
  const ret = +val
  console.log(ret)
  return ret
}
/**
 * 'as' NaN
 * '0123' 123
 * '1.123' 1.123
 * false 0
 * true 1
 *
 */
plus2Number(false) //
