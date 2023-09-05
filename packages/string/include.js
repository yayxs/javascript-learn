import makeString from './makeString'
export default function include(str, needle) {
  if (needle === '') return true

  return makeString(str).indexOf(needle) !== -1
}
