// 获取所有的元素
const allEles = document.getElementsByTagName('*')
// console.log(allEles)
// 获取带name属性的a元素
// const aEles = document.anchors

console.log(document.implementation)
/**
 * 除了Document 类型、Element 类型就是Web开发中常用的类型
 * 访问元素的标签名 子节点 属性
 * 在HTML元素中 元素的标签名始终全大写表示
 */

const dNode = document.getElementById('div-ele')
console.log(dNode.tagName) // 'DIV'

if (dNode.tagName.toLocaleLowerCase() === 'div') {
  console.log('do')
}

/**
 * 获取属性 与属性相关的DOM方法
 * 主要用于取得自定义属性的值
 */
console.log(dNode.getAttribute('id'))
console.log(dNode.getAttribute('class'))
console.log(dNode.getAttribute('title'))
console.log(dNode.getAttribute('lang'))

const newDiv = document.getElementsByClassName('new-div')[0]
console.log(newDiv)

newDiv.setAttribute('id', 'new-div')
console.warn('创建一个新元素')

// 通过元素的标签名
const pNode = document.createElement('p')
const divNode = document.createElement('div')
// 添加属性

pNode.id = 'is-p'
pNode.className = 'is-p'

// 添加到body元素中

document.body.appendChild(pNode)

const divNode = document.getElementById('is-d')

/**
 * Text 节点由Text 类型 表示
 * nodeType 3
 */

/**
 * 创建文本节点
 */
let text = `<span>插入节点的文本</span>`
text = ''
const textNode = document.createTextNode(text)

divNode.appendChild(textNode)

/**
 * Comment 类型：DOM中的注释通过Comment 类型表示
 * nodeType 8
 * nodeValue 注释的内容
 */

/**
 * DocumentFragment 唯一一个在标记中没有对应表示的类型
 * nodeType 11
 * nodeValue null
 *
 */

const df = document.createDocumentFragment()
const ulNode = document.getElementsByClassName('list')
console.log(ulNode)

for (let i = 0; i < 3; i++) {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(`i`))
  df.appendChild(li)
}

// 创建表格
let table = document.createElement('table')
// table.border = 1
// table.width = '100%'

// 创建表体
let tbody = document.createElement('tbody') // 创建表体

table.appendChild(tbody)

// 创建第一行

let row = document.createElement('tr')
tbody.appendChild(row)

let cell = document.createElement('td')

cell.appendChild(document.createTextNode('cell 1'))

row.appendChild(cell)

document.body.appendChild(table)

/**
 * <table> 元素添加的属性和方法
 */

/**
 * DOM 变动观察器
 * 内建对象 观察DOM元素 检测到更改时触发回调
 */
// 创建一个带有回调函数的观察器
let ob = new MutationObserver((res) => {
  console.log('dom load')
  console.log(res)
})

// 附加到一个DOM节点

const divNode = document.getElementsByClassName('is-p')[0]

const cfg = {}
// 实例与DOM关联
ob.observe(document.body, {
  attributes: true,
})

document.body.className = 'bo'
