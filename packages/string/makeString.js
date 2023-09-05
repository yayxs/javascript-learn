export default function makeString(object) {
  if (object == null) return ''
  return '' + object
}

const list = [null, undefined, 0, '0', '-1', '', ' ', {}, []]

list.map((it) => {
  console.log(it, makeString(it))
})
