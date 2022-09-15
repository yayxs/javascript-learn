## 对象的变化侦测

### 什么是变化侦测

变化侦测，侦测数据的变化 数据发生 侦测到 并发出通知

### 如何追踪变化

对象数据类型可以利用 `Object.defineProperty` 将属性转换为 `getter/setter` 的形式追踪变化

- 读取数据触发 getter
- 修改数据触发 setter

### 如何收集依赖

getter 中收集依赖

### 依赖收集在哪里

Dep

### 依赖是什么

Watcher

### 侦测 object 中所有数据（包括子数据）的变化

Observer

### 对象（object）的问题

Vue.js 通过 Object.defineProperty 来将对象的 key 转换成 getter/setter 的形式来追踪变化，但 getter/setter 只能追踪一个数据是否被修改，无法追踪新增属性和删除属性，所以才会导致上面例子中提到的问题。

## 数组的变化侦测

### 如何追踪变化

拦截器

- push pop shift unshift splice reverse

使用`__proto__`覆盖原型

### 收集依赖

1. 什么是虚拟 DOM
2. 为什么引入虚拟 DOM
