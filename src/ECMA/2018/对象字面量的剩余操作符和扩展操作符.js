// 剩余操作符

const p = {  name:'p',info:'info',job:{t:'t'} }

// 最多使用一次 放在最后
const  { name,...other  } = p

console.log(p);
console.log(other);
const p = { name:'name',age:1,job:{title:'xx'}  }
const { ...newP }  = p
console.log(p.job === newP.job); // true
// 扩展操作符 拼接数组一样合并两个对象
const s = Symbol()

const a = {a:1}
const b = { [s]:2 }

const o = { ...a,...b  }