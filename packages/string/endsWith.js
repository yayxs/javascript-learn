import makeString from './makeString'
import toPositive from './toPositive'

/**
 *
 * @param {*} str
 */
export default function endsWith(str, ends, position) {
  str = makeString(str)
  ends = '' + ends
  if (typeof position === 'undefined') {
    position = str.length - ends.length
    console.log(position)
  } else {
    position = Math.min(toPositive(position), str.length) - ends.length
    console.log('pos', position)
  }
  /** 大于等于position */
  return position >= 0 && str.indexOf(ends, position) === position
}

console.log(endsWith('image.old.gif', 'old', 9))
