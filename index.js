/**
 * 代理捕获13种不同的基本操作
 * 有着不同的反射api 方法、参数、
 */

const target = {}

const p = new Proxy(target, {
  set() {
    console.log('set()')

    return Reflect.set(...arguments)
  },
})

p.foo = 'bar'

console.log('proxy run')
