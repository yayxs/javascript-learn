/**
 * 1、创建 {}
 * 2、执行CreateObject.call({})
 * 3、执行
 */
function CreateObject(id) {
  console.log('this', this)
  this.id = id
}

CreateObject.prototype.pKey = 'pVal'

const object = new CreateObject('id-is-1')
console.log(object)
/** 对象的__proto__ */
console.log(object.__proto__)
/** 函数的原型 */
console.log(CreateObject.prototype)
