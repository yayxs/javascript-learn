import escapeRegExp from './escapeRegExp'
export default function defaultToWhiteSpace(characters) {
  if (characters == null) return '\\s'
  else if (characters.source) {
    return characters.source
  } else {
    const res = '[' + escapeRegExp(characters) + ']' // [_-]
    return res
  }
}
