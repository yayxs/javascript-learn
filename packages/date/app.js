function test() {
  const a = new String('a')
  const b = String('b') === 'b'
  console.log(a, b, typeof a, typeof b, String(2012))
  console.log('2023'.slice(-2)) // 从索引 4-2
}

function setDate() {
  const d = new Date(2023, 0, 33)
  console.log(d)
}

function date2Number() {
  let date = +new Date() === Date.now()
  console.log(date)
}
date2Number()

// setDate()
// test()
