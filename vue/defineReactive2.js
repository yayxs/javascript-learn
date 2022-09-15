function defineReactive (data, key, val) {
  let dep = new Dep() // 修改
  Object.defineProperty(data, key, {
   enumerable: true,
  configurable: true,
  get: function () {
      dep.depend() // 修改
      return val
    },
      set: function (newVal) {
        if(val === newVal){
         return
    }
       val = newVal
       dep.notify() // 新增
     }
   })
  }