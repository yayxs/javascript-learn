import makeString from './makeString'
export default function chars(str) {
  /** a cha ['a', ' ', 'c', 'h', 'a'] */
  return makeString(str).split('')
}

console.log(chars('a cha'))
