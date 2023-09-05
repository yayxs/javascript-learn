/**
 * 代理和反射 可以给目标对象定义一个关联的代理对象
 * 代理对象可以作为抽象的目标对象来使用
 */

const target = {
  id: 'old-id',
}
const handler = {}

let p = new Proxy(target, handler)

// id 属性访问同一个值
console.log(target.id)

console.log(p.id)

// 给目标属性赋值反映在两个对象上
// 两个对象访问的是同一个值
target.id = 'new-id'

console.log(target.id)
console.log(p.id)

/**
 * 代理的主要目的定义捕获器 trap
 */

const target = {
  id: 'old',
}

const handler = {
  /**
   *
   * @param {*} trapTarget 目标对象
   * @param {*} p 要查询的属性
   * @param {*} receiver  代理对象
   * @returns
   */
  get(trapTarget, p, receiver) {
    // console.log(trapTarget)
    // console.log(p)
    // console.log(receiver)

    return 'handle get'
  },
}

const p = new Proxy(target, handler)

/**
 * 所有捕获器都可以基于自己的参数重建原始操作
 */
