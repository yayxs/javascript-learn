/**
 * 启动时候检测使用哪个模块系统
 * 进行适当的配置 所有逻辑包装在一个立即调用的函数表达式 
 */

 (function(root,factory){

  if(typeof define === 'function' && define.amd){
    console.log('AMD注册为匿名函数',);
    
  }else if(typeof module === 'object' && module.exports){
    console.log('Node');
    
  }
  
  })();