/**
 * 3种特殊的引用类型：Boolean Number String
 */

let s1 = 'some text'

/**
 * 创建一个String 类型的实例
 * 调用实例上特定的方法
 * 销毁实例
 *
 */
let s2 = s1.substring(2)

/**
 * 在原始包装类型的实例上调用 typeof 会返回 object
 */

/**
 * 原始值包装类型：特殊的引用类型 Boolean Number String
 * String 对应字符串的引用类型
 * 字符串由 16位置
 */

// 创建一个String对象

const strObj = new String('创建一个String对象')
// StrObj的length
const lenStrO = strObj.length

let msg = '获得一个字符串中的某个字符'

let s = msg.charAt(0)

s = msg.charCodeAt(0)

// 拼接字符串
let old = 'old'
let newStr = 'new'

// let ret = old.concat(newStr)
console.log(old)

// 获取子串 slice substring substr

let originStr = '012 3456'

const retStr = originStr.slice(3)

console.log('old-val', originStr)
console.log('new-val', retStr)
console.log('main run')

/**
 * 字符串模式匹配方法
 */

// match 本质和exec相同

let text = 'vat,bat,sat'
let p = /.at/

let m = text.match(p)

text = 'cat,bat'
let pos = text.search(/at/) // 第一个字符所在字符串的位置

let time = '2022-09-09 12:12:12'

let ret = time.replace(/\-/g, '/')

/**
 * 有几个页数的字符序列 可以用来插入正则边表达式的值
 */

/**
 * [start,end) slice
 * [start,end) substring  start>end
 * [start len substr
 * 只需要记住 slice
 */
let sVal = 'foo'
/**
 * 在一边填充字符、直至长度满足
 */
console.log(sVal.padStart(6, '1'))
