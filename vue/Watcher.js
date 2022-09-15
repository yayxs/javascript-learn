/**
 * Watcher 数据发生变化时通知它，然后它再通知其他地方
 */
 export default class Watcher{
  /**
   * 
   * @param {*} vm 实例
   * @param {*} expOrFn 函数
   * @param {*} cb // 回调函数
   */
  constructor(vm,expOrFn, cb){
      this.vm = vm
      // 执行this.getter
      this.getter = parsePath(expOrFn)
      this.cb = cb
      this.value = this.get()
  }
  get(){
      window.target = this.value

      this.value = this.get()

      this.cb.call(this.vm,this.value,oldValue)
  }

}