function A() {}

function B() {}

function C() {}

function D() {}

// console.log(A.prototype)
// console.log(B.prototype)
// console.log(C.prototype) // new调用C产生的对象的原型
console.log(Object.prototype.toString.call(D['prototype']))

/**
 * 1、.prototype得到对象
 * 2、.constructor得到函数
 */

/** 有一个函数 */
function CreateFunc() {}
/** 函数有了一个属性 prototype （特定规则生成的） */
console.log(CreateFunc.prototype, typeof CreateFunc.prototype)
/** 原型对象 */
const object = CreateFunc.prototype
/** 原型对象有个constructor属性  （自动获得的） */
console.log(object.constructor, object.constructor === CreateFunc)
/** 原型对象的原型 */
console.log('12', object.__proto__)
/** 函数的属性 prototype */
console.log(Object.prototype)

function logArgs(a, b) {
  console.log(arguments)

  const [constructor] = [...arguments]
  console.log(constructor)
}

logArgs('arg1', 'arg2')

console.log('---------------------')
function newLike() {
  /** 1个空的对象 */
  let object = new Object()
  /** arguments类数组对象 */
  console.log(arguments)
  /** arguments类数组对象转为真正的数组 */
  const array = [...arguments] // or Array.from(arguments)
  const [func, ...args] = array // func是一个函数 args接收剩下的参数 ['12','23']

  /** 对象的原型指向 = 构造函数的prototype */
  object.__proto__ = func.prototype
  /** func内部的this 要指向object*/
  /** 函数调用一下（执行构造函数内部的代码） */
  const calledRes = func.apply(object, args)
  /** calledRes不是空的对象返回这个对象，否则返回创建的新对象，即是let object = new Object()的object */

  return typeof calledRes === 'object' ? calledRes : object
}

function Func(id) {
  this.id = id
  /** 构造函数返回值 */
  return '123'
}

const obj = newLike(Func, '12', '34')

console.log('obj', obj)

console.log('-------------------')

function MeIsFunc(id) {
  this.id = id

  // return
}

const formatTime = (date) => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return `${[year, month, day].map(formatNumber).join('/')} ${[
    hour,
    minute,
    second
  ]
    .map(formatNumber)
    .join(':')}`
}

const formatNumber = (n) => {
  n = n.toString()
  return n[1] ? n : `0${n}`
}

module.exports = {
  formatTime
}
