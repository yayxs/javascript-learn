/**
 * 提取数据
 */
function getData(string) {
  string = '2021-12-12'
  const re = /(\d{4})-(\d{2})-(\d{2})/
  console.log(string.match(re))
}

function matchDate(string) {
  let reg = /\d{4}(-|\/|\.)\d{2}(-|\/|\.)\d{2}/
}

function trimString(string) {
  string = '  234  7'
  console.log(string.replace(/^\s+|\s+$/g, ''))
}

// trimString()
// getData()

const list = ['1', '2', '3', '4']
const res = list.splice(1, 1)
console.log('list', list)
console.log('res', res)

console.log(new Date().getTime())
