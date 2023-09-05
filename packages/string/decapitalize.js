import makeString from './makeString'

/**
 * 将字符串的第一个字母转换为小写。
 * @param {*} str
 */
export default function decapitalize(str) {
  /** 确保字符串 */
  str = makeString(str)

  /** 取到第个字符 然后拼接剩余 */
  return str.charAt(0).toLowerCase() + str.slice(1)
}
