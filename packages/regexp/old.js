{
  // const regexp = new RegExp('pattern','flags')

  // const regexp1 = /pattern/gmi

  let currStr = '2022-05-07 15:41:12'
  console.log(/^\d{4}\-\d{2}\-\d{2} \d{2}:\d{2}:\d{2}$/.test(currStr))

  const ans = currStr.search(/\-/i)

  console.log(ans)

  const p = '+7(12)-12-345-68'

  // console.log(p.match(/\d/g).join(','))

  console.log(p.replace(/\D/g, ''))
  console.log('CS-4'.match(/CS.4/g))

  console.log('😄'.length)

  console.log(/^2022/.test('2022-'))

  console.log('Mop top'.match(/[tm]op/gi))

  console.log('12 , 345'.match(/\d{2,4}/g))

  console.log('abc abbc abbbc abbbbc abbbbbc abbbbbbc'.match(/ab{2,5}c/g))

  // console.log('a1b a2b a3b'.match)

  /**
   * 匹配16进制颜色值
   */

  let strs = ['#ffbbad', '#Fc01DF', '#FFF', '#ffE']

  strs.forEach((str) => {
    console.log(str.match(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/g))
  })

  /**
   * 匹配时间
   */
  const createTime = '2022-05-07'

  const res = /^[0-9]{4}-0[1-9]1[0-2]-(0[1-9]|[12][0-9]|3[0-1])$/.test(
    createTime
  )
  console.log(res)
}

{
  /**
   * 字符类、限定符、分组、向前查找、反向引用
   * 带零个或者多个 标记
   * 元字符需要转义
 
   * RegExp 构造函数
   */

  let p = /at/g // 匹配字符中的 at
  let p2 = /[bc]at/i // 匹配第一个bat 或者 cat
  p2 = new RegExp('[bc]at', 'i')

  let p3 = /.at/gi // 匹配所有以 at 结尾的三字符组合 忽略大小写

  let p4 = /\[bc\]at/i

  const setGOrNot = p4.global
  console.log(p4.ignoreCase)

  /**
   * 正则表达式的另一个方法 text
   */

  text = '000-00-0000'
  p = /\d{3}-\d{2}-\d{4}/

  console.log(p.test(text))
}

{
  function change(string) {
    const re1 = /cat/g

    console.log(re1)
    const re2 = new RegExp(re1)
    console.log(re2)
  }

  function info() {
    const re = /[ab]1/gi
    console.log(re.global) // true or false
    console.log(re.ignoreCase) // true or false
    console.log(re.unicode) // true or false
    console.log(re.sticky) // true or false
    console.log(re.lastIndex) // 0
    console.log(re.multiline) // true or false
    console.log(re.source) // [ab]1
  }

  /**
   * index 起始位置
   * input 查找的字符串
   * @param {*} string
   */
  function insFunc(string) {
    string = 'mom and dad and baby and me'

    let reg = /mom( and dad( and baby)?)?/

    const matches = reg.exec(string)

    console.log(matches)
    // text = 'cat,bat,sat,fat'
    // p = /.at/
    // m = p.exec(text)
  }
  function findCat(string) {
    string = 'cat,bat,sat,fat'
    const matches = /.at/.exec(string)
    console.log(matches)
  }

  function gNo(string) {
    string = 'cat,bat,fat'
    const re = /.at/g

    let matches = re.exec(string)
    console.log('matches', matches)
    console.log('matches.index', matches.index) // 0
    console.log('matches[0]', matches[0]) // cat
    console.log('re.lastIndex', re.lastIndex) // 3

    matches = re.exec(string)
    console.log('matches', matches)
    console.log('matches.index', matches.index) // 4
    console.log('matches[0]', matches[0]) // bat
    console.log('re.lastIndex', re.lastIndex) // 7

    matches = re.exec(string)
    console.log('matches', matches)
    console.log('matches.index', matches.index) // 8
    console.log('matches[0]', matches[0]) // fat
    console.log('re.lastIndex', re.lastIndex) // 11
  }

  function yFlag(string) {
    string = 'aat,bat,cat,dat'
    const re = /.at/y
    const array = re.exec(string)
    console.log('array', array)
    console.log(array.index)
    console.log(array[0])
    console.log(re.lastIndex)
  }

  function test(string) {
    string = '00-12'
    console.log(/\d{2}-\d{2}/.test(string))
  }

  function execAndTest(string) {
    string = 'this has been a short summer'
    const re = /(.)hort/g
    if (re.test(string)) {
      console.log('RegExp.input', RegExp.input)
      console.log(RegExp.leftContext)
      console.log(RegExp.rightContext)
      console.log(RegExp.lastMatch)
    }
  }

  function find$1(string) {
    string = 'this has been a short summer'

    let re = /(..)or(.)/g

    if (re.test(string)) {
      console.log(RegExp.$1)
      console.log(RegExp.$9)
    }
  }

  // execAndTest()
  // test()
  // yFlag()
  // gNo()
  // findCat()
  // insFunc()
  // info()
  // change()
}
