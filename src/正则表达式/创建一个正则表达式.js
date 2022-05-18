
// const regexp = new RegExp('pattern','flags')

// const regexp1 = /pattern/gmi


let currStr = '2022-05-07 15:41:12'
console.log(/^\d{4}\-\d{2}\-\d{2} \d{2}:\d{2}:\d{2}$/.test(currStr));  


const ans = currStr.search(/\-/i)

console.log(ans)


const p = '+7(12)-12-345-68'

// console.log(p.match(/\d/g).join(','))


console.log(p.replace(/\D/g,''))
console.log('CS-4'.match(/CS.4/g))

console.log('😄'.length);

console.log(/^2022/.test('2022-'));

console.log('Mop top'.match(/[tm]op/gi));


console.log('12 , 345'.match(/\d{2,4}/g));


console.log('abc abbc abbbc abbbbc abbbbbc abbbbbbc'.match(/ab{2,5}c/g));

// console.log('a1b a2b a3b'.match)

/**
 * 匹配16进制颜色值
 */

let strs = ['#ffbbad','#Fc01DF','#FFF','#ffE']

strs.forEach(str=>{
  console.log(str.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/g));
})

/**
 * 匹配时间
 */
const createTime = '2022-05-07'

const res =  (/^[0-9]{4}-0[1-9]1[0-2]-(0[1-9]|[12][0-9]|3[0-1])$/).test(createTime)
console.log(res);

