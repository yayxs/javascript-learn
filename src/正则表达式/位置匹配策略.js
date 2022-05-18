let str = `123456789`
let ans = str.replace(/(?!\b)(?=(\d{3})+\b)/g,',')

console.log(str)
console.log(ans)