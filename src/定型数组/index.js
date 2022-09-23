/**
 * 定型数组：ECMAScript 新增的结构、渲染复杂图形应用程序的编程平台
 * WebGL
 * Float32Array 实际上是一种视图、可以允许JavaScript 运行时访问一块 ArrayBuffer的预分配内存
 */

// const buf = new ArrayBuffer(16) // 在内存中分配16字节

// const byteLne = buf.byteLength

// // 读写ArrayBuffer 的视图是 DataView

// const fullDataView = new DataView(buf)
// // 构造函数接收一个可选的字节偏移量和字节长度

// const firstDataView = new DataView(buf, 0, 8)

// 读取缓冲 需要的组件
/**
 *
 */

// const buffer = new ArrayBuffer(2)

// const view = new DataView(buffer)
// const first = view.getInt8(0) // 检查第一个字符
// const last = view.getInt8(1) // 检查第二个
// view.setUint8(0, 255)
// view.setUint8(1, 0xff)

const buf = new ArrayBuffer(2)

const view = new DataView(buf)

view.setUint8(0, 0x80)
view.setUint8(1, 0x01)

const buf = new ArrayBuffer(12) // 创建12字节的缓冲
const ints = new Int32Array(buf) // 创建一个引用该缓冲的
const ints2 = new Int32Array(6) // 创建一个长度为6的
const ints3 = new Int32Array([2, 4, 6, 8])
