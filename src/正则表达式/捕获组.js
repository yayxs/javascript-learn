const doMainRegExp = /([\w-]+\.)+\w+/g

console.log('site.com'.match(doMainReg));

const emailRegExp = /[-.\w]+@([\w-]+\.)+[\w-]+/g
console.log('my@mail.com'.match(emailRegExp))

let str = `<h1>hello world</h1>`
console.log(str.match(/<.*?>/));

console.log(str.match(/<.*?>/)[0]);
console.log(str.match(/<.*?>/)[1]);
