let arr = ['a','b']
let ans = arr.push('c')
console.log(arr,ans) // [ 'a', 'b', 'c' ] 3

let arr = ['a','b']
let ans = arr.unshift('c')
console.log(arr,ans) // [ 'c', 'a', 'b' ] 3



let arr = ['a','b']
let ans = arr.pop()
console.log(arr,ans) // [ 'a' ] b

let arr = ['a','b']
let ans = arr.shift()
console.log(arr,ans) // [ 'b' ] a

let arr = ['a','b']
let ans = arr.indexOf('a')
console.log(arr,ans) // [ 'a', 'b' ] 0

let arr = ['a','b','c']
let ans = arr.splice(1,1) // 从b开始 删除b
console.log(arr,ans) // [ 'a', 'c' ] [ 'b' ]

let arr = ['a','b','c']
let ans = arr.slice() 
console.log(arr,ans,arr===ans) // [ 'a', 'b', 'c' ] [ 'a', 'b', 'c' ] false

let arr = new Array(2)
console.log(arr)

let arr = new Array('1','2')
console.log(arr)

let a = ['a']
let b = ['b']
let c = ['c']

const ans = a.concat(1,b,c)
console.log(ans)

let arr = ['a','b','c']
let ans = arr.copyWithin()

let arr = ['a','b','c']
let ans = arr.entries()
console.log(arr,ans)

let arr = ['a','b','c']
let ans = arr.filter(it=>{
  it = 'd'
})
console.log(arr,ans)