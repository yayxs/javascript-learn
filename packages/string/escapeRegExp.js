import makeString from './makeString'
export default function escapeRegExp(str) {
  /** 返回新字符串 */
  
  return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1')
}
