/**
 * Array 数组 一组有序的数据 每个槽位可以存储不同的值
 */

let arr = ['a', 'b']
let ans = arr.push('c')
console.log(arr, ans) // [ 'a', 'b', 'c' ] 3

let arr = ['a', 'b']
let ans = arr.unshift('c')
console.log(arr, ans) // [ 'c', 'a', 'b' ] 3

let arr = ['a', 'b']
let ans = arr.pop()
console.log(arr, ans) // [ 'a' ] b

let arr = ['a', 'b']
let ans = arr.shift()
console.log(arr, ans) // [ 'b' ] a

let arr = ['a', 'b']
let ans = arr.indexOf('a')
console.log(arr, ans) // [ 'a', 'b' ] 0

let arr = ['a', 'b', 'c']
let ans = arr.splice(1, 1) // 从b开始 删除b
console.log(arr, ans) // [ 'a', 'c' ] [ 'b' ]

let arr = ['a', 'b', 'c']
let ans = arr.slice()
console.log(arr, ans, arr === ans) // [ 'a', 'b', 'c' ] [ 'a', 'b', 'c' ] false

let arr = new Array(2)
console.log(arr)

let arr = new Array('1', '2')
console.log(arr)

let a = ['a']
let b = ['b']
let c = ['c']

const ans = a.concat(1, b, c)
console.log(ans)

let arr = ['a', 'b', 'c']
let ans = arr.copyWithin()

let arr = ['a', 'b', 'c']
let ans = arr.entries()
console.log(arr, ans)

let arr = ['a', 'b', 'c']
let ans = arr.filter((it) => {
  it = 'd'
})
console.log(arr, ans)

/**
 * 创建数组
 */
// 1、使用构造函数

const array1 = new Array()

const array2 = new Array(4) // 长度为4

const array3 = new Array('top', 'left', 'right', 'left')

const array4 = Array()

// 2、数组字面量
const array5 = []
// 3、静态方法 Array.from

const array6 = Array.from('array') // ['a','r']
const array7Copy = [1]
const array7 = Array.from(array7Copy) // 浅复制

const arrayLikeObj = {
  0: 1,
  length: 1,
}
const arrayOld = [1, 2]

const array8 = Array.from(arrayOld, (x) => x + 1)
// 4、静态方法 Array.of

const array9 = Array.of(1, 2, 3)

/**
 * 空位
 */

const arr1 = [1, , , 3]
/**
 * 检测数组 Array.isA
 */

/**
 * 迭代器方法
 */

const arr2 = ['top', 'left']
const aKeys = Array.from(arr2.keys())

for (const [idx, ele] of arr2.entries()) {
  console.log(idx, ele)
}

/**
 * 填充
 */
const zs = [0, 0]
zs.fill(5)

console.log(zs)

/**
 * 转换方法
 * valueOf 返回数组本身
 * toString 字符串
 *
 */

const pos = ['left', 'right']
const res1 = pos.toString()
const res2 = pos.valueOf()
// toLocalString

/**
 * 栈方法
 */
const a = []

const c = a.push('left', 'right') // 2

console.log(a)
const it = a.pop()
console.log(a)
const a = ['bottom', 'center', 'top']

const item = a.shift()

// console.log(a)

const a1 = []
const len = a1.unshift('left')

/**
 * 反转
 */

const old = ['left', 'center', 'right']

const ret = old.reverse()

console.log(old)

/**
 * sort
 */
