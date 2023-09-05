/**
 * html中视form
 * js 是 HTMLFormElement 继承 HTMLElement 类型
 * acceptCharset 服务器接收的字符集
 * action 请求的URL 
 * elements 所有控件的HTMLCollection
 * enctype 请求的编码类型
 * length 表单中控件的数量
 * method HTTP请求方法类型 get post
 * name 表单的名字
 * reset() 表单字段充值默认值
 * submit() 
 * target 
 */
const fs = document.forms
console.log('forms',fs);

const firstForm = document.forms[0]
console.log(firstForm);

/**
 * 阻止表单提交
 */
firstForm.addEventListener('submit',(e)=>{
  console.log(e);
  
  e.preventDefault()
})

/**
 * 重置表单
 */
firstForm.addEventListener('reset',(e)=>{
  console.log('重置表单');
  
  e.preventDefault()
  
})



/**
 * 表单字段
 */
const field1 = firstForm.elements[0]

// 
const field2 = firstForm.elements['username']
// 字段的数量
const fieldCo = firstForm.elements.length
console.log(fieldCo);


/**
 * 表单字段的公共属性
 * disabled 表单字段是否禁用
 * form 指向表单字段所属的表单
 * name 
 * readOnly
 * tabIndex
 * type
 * value 
 */

/**
 * 表单字段的公共方法
 * focus blur
 */

/**
 * blur 字段失去焦点时触发
 * change 
 *  input textarea 发生变化 失去焦点
 *  select 选中项发生变化
 * focus 获取焦点时触发
 */

const username = document.forms[0].elements['username']
username.addEventListener('focus',(e)=>{
  e.target.select()
})
username.addEventListener('select',(e)=>{
  console.log(username.value);
  
})


console.log(username);

/**
 * 输入过滤
 * 通过JS实现输入过滤
 * keypress
 */


const phone = document.forms[0].elements['phoneNumber']

phone.addEventListener('keypress',(e)=>{
  const cc = e.charCode
  console.log(cc);
  
  const flag = /\d/.test(String.fromCharCode(cc))
  if(!flag){
    e.preventDefault()
  }
})

console.log(phone);



/**
 * HTML5约束验证API
 */

// 比填写的字段 required 

