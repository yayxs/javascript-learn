/**
 * 任何支持style属性的html元素 在js中有个 style
 */

const pNode = document.querySelector('.is-p')

pNode.style.width = '100px' // 加上单位
pNode.style.height = '200px'
pNode.style.border = '1px solid red'

console.log(pNode.style.cssText) // 在浏览器内部的表示
console.log(pNode.style.length)

pNode.style.cssText = `width:100px`

/**
 * 元素尺寸
 */
