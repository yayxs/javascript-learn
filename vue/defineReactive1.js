/**
 * 定义一个响应式的数据 用来追踪变化
 * @param {*} data 
 * @param {*} key 
 * @param {*} val 
 */
 function defineReactive(data,key,val){
  let dep = []
  Object.defineProperty(data,key,{
      enumerable:true,
      configurable:true,
      // 在getter中收集依赖
      get(){
          dep.push(window.target) // window.target保存着依赖（假如是个数组）
          return val
      },
      set(newVal){
          if(val===newVal){
              return
          }

          for(let i = 0;i<dep.length;i++){
              // 触发依赖
              dep[i](newVal,val)
          }
          val = newVal
      }
  })
}