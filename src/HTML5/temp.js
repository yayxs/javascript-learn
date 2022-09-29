/**
 * 以前的HTML 规范 从未出现描述JS接口情形 HTML 纯标记语言
 *  HTML5 包含大量的JSAPI的定义
 */

/**
 * 新增 getElementsByClassName
 */
const nodes = document.getElementsByClassName('is-p is-div')

console.log(nodes)

/**
 * 新增 classList
 */

const isP = document.querySelector('.is-p')
isP.classList.add('p-el')

/**
 * readyState 属性
 */

console.log(document.readyState)
/**
 * compatMode 属性
 */

/**
 * DOM 已经操纵节点提供了很多API
 * 在写入模式下 赋值给innerHTML 属性的值会被解析为DOM子树 代替元素之前的所有节点
 */

// const divNode = document.getElementsByClassName('is-div')[0]

// console.log(divNode.outerHTML) // html字符串

// divNode.outerHTML = `<p></p>`

/**
 * DOM 规范中 没有涉及的一个问题是如何滚动页面中的某个区域
 * HTML5 标准化
 * alignTop 是布尔值 true 窗口滚动户元素的顶部与视口顶部对齐
 * false 窗口滚动后元素的底部和视口底部对齐
 * behavior smooth auto
 * block 定义垂直方向的对齐
 */

function toTop() {
  const node = document.querySelector('.main-view')
  console.log(node)
  node.scrollIntoView(true, {})
  console.log('123')
}

console.log(window.document.documentElement.contains(document.body))
