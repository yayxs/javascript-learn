/**
 * 文本中
 * 搜索和替换
 * 模式
 */
/**
 * regexp reg
 *
 * // w完全静态的
 * 动态生成的字符串
 */
/**
 * i A和a一样
 * g 返回第一个匹配项目
 */

const reg = /abc/

// console.log(Object.prototype.toString.call(reg) === '[object RegExp]')

/**
 * 修饰符的种类
 * i
 * g
 * m 多行模式
 * s
 * u
 * y
 */

/**
 * @see // https://www.bugbugnow.net/2020/02/Escape-characters-used-in-regular-expressions.html
 * 转义 ascii 区域中除数字大写、小写字母之外的字符
 * ascii
 * [0-9]
 */
const reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g

function asciiWords(string) {
  const res = string.match(reAsciiWord)
  console.log('asciiWords res', res)
  return res || []
}
/**
 * 没有匹配项目返回 null
 * @param {*} string
 */
function find2023(string) {
  string = '2023-23,2023-12'

  console.log(string.match(/a/i))
}

function hexStr(string) {
  string =
    '0103e84c7b22646964223a223032344634323535303031343032303232303331353936333230313531333531222c226f62754368616c6c656e6765223a2230423938373538463334434241313531227d'
  const match = string.match(/[\da-f]{2}/gi)
  console.log(match)
}

/**
 * 字符类 一种特殊的符号
 */

function findNumber(params) {
  params = '+9(123)-12-3121'
  let reg = /\d/g
  console.log(params.match(reg))
}

function findSpace(string) {
  string = '\t\n\v\f\r '
  const reg = /\s/g
  console.log(string.match(reg))
}

/** 匹配单个字符 */
const reWhitespace = /\s/

/**
 * 返回最后非空格的索引
 */
function trimmedEndIndex(string) {
  let index = string.length
  console.log('str index', index)
  while (index-- && reWhitespace.test(string.charAt(index))) {}
  console.log('str index', index)

  return index
}

function findWord(string) {
  string = '_aB'
  console.log(string.match(/\w/g))
}

function findDot(string) {
  string = '\n123ab'
  console.log(string.match(/./g))
}

function findAnyChar(string) {
  string = '\n'
  console.log(string.match(/[\s\S]/g))
}
// findAnyChar()

function formatTimeAgo(from, options, now) {
  const {} = options
}
function findLetter(string) {
  string = 'A ბ ㄱ'
  console.log(string.match(/\p{L}/gu))
}
// findLetter()

/**
 * 查找16进制的数字
 */
function findHexNumber(string) {
  string =
    '0103e84c7b22646964223a223032344634323535303031343032303232303331353936333230313531333531222c226f62754368616c6c656e6765223a2230423938373538463334434241313531227d'

  console.log(string.match(/\p{Hex_Digit}\p{Hex_Digit}/gu))
}

function find$(string) {
  string = '$2, €1, ¥9.00'
  console.log(string.match(/\p{Sc}/gu))
}

/**
 * 锚点
 */
function findMao(string) {
  const reg = /^\d\d:\d\d$/
  string = '12:23'
  console.log(reg.test(string))
}

function findIndex0(string) {
  string = `1 row
2 row
3 row
  `

  console.log(string.match(/^\d/gm))
}

/**
 * 词法边界
 */

/**
 * 字符特殊的含义
 * [] {} () \ ^ $ . | ? * +
 */

function findTran(string) {
  string = 'version 3.1'

  console.log(string.match(/\d\.\d/))
}
function findXie(string) {
  string = '/'

  console.log(string.match(/\//gi))
}
function findEscaping(string) {
  let reg = new RegExp('d.d')
  console.log('version 2.3'.match(reg))
}

const reFlags = /\w*$/
function cloneRegExp(regexp) {
  console.log('--', regexp)
  const result = new regexp.constructor(regexp.source, reFlags.exec(regexp))
  console.log(result)
}

/**
 * 克隆一个正则
 */
function initCloneByTag(object, tag = '[object RegExp]') {
  const Ctor = object.constructor
  switch (tag) {
    case '[object RegExp]':
      const res = cloneRegExp(object)
      console.log('res', res)
      return res
  }
}

function findLiangCi1(string) {
  /**
   *
   */
  // reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

  string = '12345  7654321 in string'
  console.log(string.match(/\b\d{5}\b/gi))
}

function findLiangCi2(string) {
  string = '+7(903)-123-45-67'
  console.log(string.match(/\d{1,}/g))
}
/**
 * ? 代表0个或1个
 * \d{1,} + 代表1个或者多个
 * \d{0,} * 可能有可能没有
 * @param {*} string
 */
function findSuoXie(string) {
  // string
}

function findXiaoShu(string) {
  string = '12.20'
  console.log(string.match(/\d+\.\d+/g))
}

function group(string) {
  string = '121212'
  console.log(string.match(/(12)+/gi))
}

function findSite(string) {
  string = 'site.com a.cn vle.vip'
  console.log(string.match(/(\w+\.)+\w+/g))
}
function findEmail(string) {
  string = 'le@163.com xx@mail.com his@site.com.uk'

  // console.log(/[-.\w]+@()+/g)
}

function findSpan(string) {
  string = '<span>'
  console.log(string.match(/<(.*?)>/))
}

function qianTaoZu(string) {
  let spa = '<span class="my">'
  let reg = /<(([a-z]+)\s([^>]*))>/
  console.log(spa.match(reg))
}

function findGo(string) {
  string = 'Gogogo me'
  console.log(string.match(/(?:go)+ (\w+)/i))
}

findGo()
function yFlag(string) {
  string = 'let name'
  let reg = /\w+/g
  console.log(reg.lastIndex)
  let w1 = reg.exec(string)
  console.log(w1[0])
  let w2 = reg.exec(string)
  console.log(w2)
}
function y1Flag(string) {
  string = 'let varName'
  let reg = /\w+/g
  let result

  while ((result = reg.exec(string))) {
    console.log(result)
  }
}

function y2Flag(string) {
  string = 'let name = "val"'
  let reg = /\w+/y

  reg.lastIndex = 3

  console.log(reg.exec(string))
}

// y2Flag()
// y1Flag()
// yFlag()

// qianTaoZu()

// findSpan()

// findSite()
// group()
// findXiaoShu()
// findLiangCi2()
// findLiangCi1()
// initCloneByTag(/\d\.\d/gi)
// findEscaping()

// findXie()

// findTran()
// findIndex0()

// findMao()
// find$()
// findHexNumber()
// findDot()
// findWord()
// trimmedEndIndex('ha-text ')
// findSpace()
// findNumber()
// hexStr()
// find2023()
