/**
 * 将字符串解析为数字。如果字符串无法解析为数字，则返回NaN。
 * @param {*} str
 * @param {*} precision
 * @returns
 */
function stringToNumber(str, precision) {
  if (str == null) return 0
  str = '' + str
  /** 没有传precision 得到1 10^0 */
  const factor = Math.pow(10, Number.isFinite(precision) ? precision : 0) // 10^exponent
  /** 得到数字 */
  const val = str * factor
  /** 得到最近整数 */
  const x = Math.round(val)
  return x / factor
}

const stringList = [
  // 'not a number', // NaN
  // '0', // 0
  // '0.0', // 0
  // '  0.0  ', // 0
  // '0.1', // 0.1
  // '0000', // 0
  // '2.345', //
  // '2',
  '2.5125', // 2.513
  '-2.5125' // -2.512
]

stringList.map((val) => {
  console.log(val, stringToNumber(val, 10))
})

// console.log(
//   Math.round(20.49),
//   Math.round(20.5),
//   Math.round(0),
//   Math.round(-1.2)
// ) // 20 21 0 -1
