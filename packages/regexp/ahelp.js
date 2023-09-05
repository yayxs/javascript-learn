/**
 * 匹配模式的标记
 * g 全局模式 查找全部的内容
 * i 不区分大小写 忽略大小写
 * m 多行模式 查到一行文本末尾 会继续查找
 * y 黏附模式 从lastIndex 开始以及之后的字符串
 * u Unicode模式
 * s dotAll 模式
 */

/**
 * 元字符
 * ( [ { \ ^ $ | ? * + .
 */

/**
 *  const re = /[ab]1/gi
  console.log(re.global) // true or false
  console.log(re.ignoreCase) // true or false
  console.log(re.unicode) // true or false
  console.log(re.sticky) // true or false
  console.log(re.lastIndex) // 0
  console.log(re.multiline) // true or false
  console.log(re.source) // [ab]1
 */
