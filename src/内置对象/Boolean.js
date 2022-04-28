console.log(Boolean()) 
console.log(Boolean(0)) 
console.log(Boolean(-0)) 
console.log(Boolean('')) 

console.log(Boolean(false)) 
console.log(Boolean(NaN)) 
console.log(Boolean(undefined)) 
console.log(Boolean(null)) 

const x = new Boolean(false);
console.log(x)
if (x) {
  // 这里的代码会被执行
  console.log('run');
}