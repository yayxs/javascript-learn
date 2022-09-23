/**
 * 移除节点
 */

const pNode = document.querySelector('.remove-p')
const PNodeChildNodes = pNode.childNodes
console.log(PNodeChildNodes)

// 删除第一个子节点

const ret = pNode.removeChild(pNode.firstChild)
