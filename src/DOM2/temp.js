/**
 * 属性和方法并不是DOM2 Style 规范中定义
 * DOM一直缺乏页面中实际尺寸的规定
 * IE 增加了一些属性
 */

/**
 * 1、偏移尺寸 offset d
 * 所有视觉空间
 * 内边距 滚动条 边框
 * 没有margin 的概念
 */

// const divNode = document.querySelector('.div-node')
// divNode.style.cssText = `width:100px;height:100px;border:1px solid red;padding: 12px`
// console.log(divNode.offsetHeight)
// console.log(divNode.offsetWidth)

// /**
//  * offsetHeight 元素在垂直方向上占用的像素尺寸 包括高度、水平滚动条、上下边框的高度
//  * offsetWidth
//  * offsetLeft 元素左边框外侧距离
//  * offsetTop 元素上边框外侧距离包含元素上边框内侧的像素数
//  */



/**
 * 客户端尺寸 content + padding 元素内容 内边距所占用的空间
 * clientWidth 和 clientHeight
 * 元素的内部空间 确定浏览器的视口尺寸
 */

 const html = document.documentElement
 console.log(html);
 
 
 console.log(html.clientHeight);
 console.log(html.clientWidth);
 
 /**
 * 滚动尺寸
 * 元素内容滚动距离的信息
 * 
 * scrollHeight 元素内容的总高度
 * scrollLeft 
 */

/**
 * scrollWidth 和 scrollHeight 可以用来确定给定元素的实际尺寸
 */


const divNode = document.querySelector('.is-div')
console.log(divNode);

const domRect = divNode.getBoundingClientRect()
/**
 * bottom 
 */
console.log(domRect);
