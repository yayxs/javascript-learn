/**
 * Map新增的 集合类型
 */

// 1、创建map
const m = new Map()
// 2、传入一个可迭代的对象
const m1 = new Map([['key', 'value']])

m1.clear()

/**
 * 与对象的差异 map回维护键值对的插入顺序
 * 内存占用 Map大约比Object
 */

const mapper = new Map([
  ['top', '12px'],
  ['left', '20px'],
])

for (let pair of mapper.entries()) {
  console.log(pair)
}

const wm = new WeakMap()
const k1 = { id: 1 }
const k2 = { id: 2 }
const k3 = { id: 3 }

/**
 * 键不属于正式的引用，不会阻止垃圾回收
 * 只要键存在，键值对就存在映射中，并被当做对值 的引用，不会被垃圾回收
 */
const wm1 = new WeakMap([
  [k1, 'val1'],
  [k2, 'val2'],
  [k3, 'val3'],
])
