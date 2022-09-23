/**
 * 字符类、限定符、分组、向前查找、反向引用
 * 带零个或者多个 标记
 * 元字符需要转义
 * g 全局模式
 * i 不区分大小写
 * m 多行模式
 * y 粘模式
 * u Unicode模式
 * s dotAll 模式
 * RegExp 构造函数
 */

let p = /at/g // 匹配字符中的 at
let p2 = /[bc]at/i // 匹配第一个bat 或者 cat
p2 = new RegExp('[bc]at', 'i')

let p3 = /.at/gi // 匹配所有以 at 结尾的三字符组合 忽略大小写

let p4 = /\[bc\]at/i

const setGOrNot = p4.global
console.log(p4.ignoreCase)

/**
 * 实例的主要方法 exec(str)
 */

let text = 'mom and dad and me'

p = /mom( and dad( and me))?/gi

let m = p.exec(text)

text = 'cat,bat,sat,fat'
p = /.at/
m = p.exec(text)

/**
 * 正则表达式的另一个方法 text
 */

text = '000-00-0000'
p = /\d{3}-\d{2}-\d{4}/

console.log(p.test(text))

/**
 * 构造函数的属性
 * 静态属性 全名和简称
 * input
 * lastMatch
 * lastParen
 *
 */
text = 'this has been a short sum'
p = /(.)hort/g

if (p.test(text)) {
  console.log(RegExp.input)
  console.log(RegExp.leftContext)
}
