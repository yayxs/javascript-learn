/**
 * 转换为字符串 toString 方法：返回当前值的字符串等价物
 * toString 数值、布尔值、对象、字符串
 * null 和 undefined 没有toString
 *
 *
 * 返回一个副本：字符串
 */

function toStr(val) {
  const ret = val.toString()
  console.log(ret)
}

toStr({ name: '1' })

console.log(String(undefined))
