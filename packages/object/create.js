/**
 * 创建对象
 */
function createObject() {
  /** Object 构造函数 new 操作符 */
  let object = new Object()
  object = {
    1: 1
  }
  console.log(object)
}

createObject()
function getProDesc(object) {
  object = {
    key1: 1,
    key2: 2
  }
  /** 
   * configurable
: 
true
enumerable
: 
true
value
: 
1
writable: true
   */
  const desc = Object.getOwnPropertyDescriptor(object, 'key1')
  console.log(desc)
  console.log(typeof desc.get)
  /**
   * es2017
   */
  const descs = Object.getOwnPropertyDescriptors(object)
  console.log(descs)
}

function assign1() {
  let dest
  let src
  let result

  dest = {}

  src = {
    id: 'src'
  }
  result = Object.assign(dest, src)
  console.log(dest === result) // true
}
function assign2() {
  let dest
  let src
  let result

  dest = {}

  result = Object.assign(dest, { a: 'a' }, { b: 'b' })
  console.log(dest === result) // true
}

function assign3() {
  let dest
  let src
  let result

  dest = {
    set a(val) {
      console.log('set', val)
    }
  }

  src = {
    get a() {
      return 'xxx'
    }
  }
}

function jieGou() {
  let object1 = {
    id: 'object1',
    k1: 'v1',
    data: null
  }
  const {
    id,
    k1: key1,
    data: { list = [] }
  } = object1
  console.log('id', id)
  console.log(key1)
  console.log(data)
}

function jie() {
  const object = {
    name: '111',
    val: '2222'
  }

  let oName, oVal, oBar
  try {
    ;({
      name: oName,
      foo: { bar: oBar }
    } = object)
  } catch (error) {
    console.log(error)
  }
}
jie()

// jieGou()

// assign3()

// assign2()
// assign1()
// getProDesc()

function CreateObject(id) {
  this.id = id
}

const obj1 = new CreateObject('id1')
const obj2 = new CreateObject('id2')

// console.log(obj1, obj2, obj1.constructor === CreateObject)
