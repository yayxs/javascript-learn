const object = new Object()

/**
 * 数据属性
 */
Object.defineProperty(object, 'key1', {
  configurable: false,
  enumerable: true,
  value: 'val1',
  writable: false
})

// object.key1 = 'val-'

try {
  Object.defineProperty(object, 'key1', {
    configurable: true,
    enumerable: true,
    value: 'val1',
    writable: false
  })
} catch (error) {
  console.log('error', error)
}

/**
 * 访问器属性
 */

let info = {
  year_: 1212,
  key: 1
}
Object.defineProperty(info, 'key', {
  get() {
    console.log('get called')
  },
  set(newVal) {
    console.log('set called', newVal)
  }
})

/**
 * 工厂模式
 */
function createObject(id) {
  let object = new Object()
  object.id = id

  return object
}

// console.log(createObject('obj1'), createObject('obj2'))
/**
 * 构造函数
 */

function GouZao(id) {
  this.id = id
}

/**
 * 内存中 {}
 * GouZao.prototype =     [[Prototype]]

  this = {}
 */
console.log(new GouZao('obj'))

let obj = {}
console.log(obj)
