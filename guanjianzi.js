// var // 关键字 + 标识符

function test() {
  msg = 'msg'
}
test()

function foo() {
  console.log(age === undefined)
  var age = 1
}
foo()
console.log(msg)

for (const key in { a: 1, b: 2 }) {
  console.log(key)
}
