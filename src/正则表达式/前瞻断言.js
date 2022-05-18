let str = `1 item 20元`

let ans = str.match(/\d+(?=元)/)

console.log(ans)  