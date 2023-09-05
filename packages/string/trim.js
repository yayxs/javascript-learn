import makeString from './makeString'
import defaultToWhiteSpace from './defaultToWhiteSpace'
const nativeTrim = String.prototype.trim
/**
 * 从字符串的开头和结尾修剪定义的字符。默认为空格字符。
 * @param {*} str
 * @param {*} characters
 * @returns
 */
export default function trim(str, characters) {
  /** 确保是字符串 */
  str = makeString(str)
  /** 没有传清除格式使用 空格 */
  if (!characters && nativeTrim) return nativeTrim.call(str)
  /** 入参是 _- 变为 [_-] */
  characters = defaultToWhiteSpace(characters)
  /** 变为 ^[_-]+|[_-]+$ */
  const re = '^' + characters + '+|' + characters + '+$'
  return str.replace(new RegExp(re, 'g'), '')
}

console.log('\\s')
console.log(trim('_-foobar-_', '_-'))
