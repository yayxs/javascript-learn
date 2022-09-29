/**
 * 现代Web浏览器已经成为规范之上
 */

/**
 * SharedArrayBuffer 被任意多个执行上下文同时使用
 * ArrayBuffer 在不同执行上下文间切换
 */

// const workerScript = `
// self.onmessage = ({data})=>{
//   const view = new Uint32Array(data)
//   for(let i = 0;i<1e6;++i){
//     view[0] +=1
//   }

//   self.postMessage(null)
// }
// `

// const workerScriptBlobUrl = URL.createObjectURL(new Blob([workerScript]))

// // 创建工作线程池

// const workers = []

// for(let i =0;i<4;++i){
//   workers.push(new Worker(workerScriptBlobUrl))
// }

/**
 * 跨文档消息 XDM 
 * 不同执行上下文 、不同源的页面 传递信息的能力
 */

 let childWin = document.getElementById('myframe')

 const cWin = childWin.contentWindow
 
 /**
  * 参数1 消息
  * 参数2 接收源
  * 参数3 
  */
 cWin.postMessage('msg','')
 
 