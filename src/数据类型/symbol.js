/**
 * 符号 创建唯一的记号，非字符串形式的对象属性
 * Boolean String Number 支持构造函数可用于初始化包含原始值的包装对象
 *
 */
let sym = Symbol()

let globalSym = Symbol.for('foo') // 创建新符号
let otherFooSym = Symbol.for('foo') // 重用已经有的符号

console.log(Symbol.keyFor(globalSym))

const s1 = Symbol('foo'),
  s2 = Symbol('bar')

let o = {
  [s1]: 'foo',
}

// console.log(typeof sym)

/**
 * 常用内置符号：直接访问、重写、模拟这些行为
 */
