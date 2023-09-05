const target = {}

const p = new Proxy(target, {
  get() {
    console.log('get()')

    return Reflect.get(...arguments)
  },
})

p.foo
