function createBaseDate(){
  const now = new Date()
  console.log(now)
  console.log(typeof now) // object
  console.log(Object.prototype.toString.call(now))
}
/**
 * 传入整数
 * 毫秒数
 * 整数称为时间戳
 */
function createMill(){
  const d1970 = new Date(0) // Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)
  const d1970Add24  = new Date(24 * 3600 * 1000)
  console.log(d1970,d1970Add24)
}

function get1969(){
  console.log(new Date(-24 * 3600 * 1000))
}

/**
 * 传入字符串
 */


function setString(){
  const d = new Date('2023-12-12') // Tue Dec 12 2023 08:00:00 GMT+0800 (中国标准时间)
  console.log(d)
}
function setStr(){

  const d = new Date('2023','0')
  console.log(d)
}
setStr()
// setString()
// get1969()
// createMill()