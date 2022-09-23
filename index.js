/**
 * 实际写代码过程中 不需要显示调用这个工厂函数来生成迭代器
 * 迭代器是一种一次性使用的对象
 * done value
 */

const arr = ['left', 'right']

for (let el of arr) {
  console.log(el)
}

console.log('main run -----')
