/**
 * 继承自Blob 扩展文件系统相关的功能类型值的数组
 * fileName 文件名字符串
 * options 可选对象
 * File 继承Blob 
 * name 文件名
 * 
 */

/**
 * fileParts Blob BufferSource String
 */
// new File()

/**
 * 异步读取文件机制
 */
 const reader = new FileReader() // 没有参数

 /**
  * 读取文件数据的方法
  * readAsText(file,encoding) 从文件中读取纯文本内容保存在
  */
 
 function readFile(input) {
   console.log(input);
   const files = input.files
   console.log(files);
   console.log(typeof files);
   
   const read  = new FileReader()
   const file = files[0]
   read.readAsText(file)
   read.loadstart = (e)=>{
     console.log('loadstart',e);
     
   }
   // 50ms 触发一次 相同的信息
   read.onprogress = (e)=>{
     console.log('onprogress',e);
   }
 
   read.abort = (e)=>{
     console.log(abort),e;
     
   }
 
   read.onerror = (e)=>{
     console.log('error',e);
     
   }
   read.loadend = (e)=>{
     console.log('loadend',e);
   }
 
   read.onload = ()=>{
     console.log(read.result);
     
   }
 }
 
 