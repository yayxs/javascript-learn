/**
 * 定义一个响应式的数据 用来追踪变化
 * @param {*} data 
 * @param {*} key 
 * @param {*} val 
 */
 function defineReactive(data,key,val){
  Object.defineProperty(data,key,{
      enumerable:true,
      configurable:true,
      // 在getter中收集依赖
      get(){
          return val
      },
      set(newVal){
          if(val===newVal){
              return
          }
          val = newVal
      }
  })
}