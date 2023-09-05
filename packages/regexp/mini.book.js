{
  let reg = /[123456abcHI]/
  reg = /[1-6a-cH-I]/
  /** 不是a 也不是b 也不是c */
  reg = /[^abc]/
  reg = /a[123]b/
  reg = /ab{2,5}c/g

  /**
   * 多选分支
   */
  function findGood(string) {
    string = 'good idea nice'
    console.log(string.match(/good|nice/g))
  }

  function findColor(string) {
    string = 'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2'
    console.log(string.match(/#([0-9a-f]{6}\b|[0-9a-f]{3}\b)/gi))
  }

  function ciBianJie(string) {
    string = '[JS] Lesson_01.mp4'
    console.log(string.replace(/\b/g, '#'))
  }

  /**
   * 找到千分位
   * @param {*} string
   */
  function getQianFenWwei(string) {
    string = '123456789'
    console.log(string.replace(/(?!^)(?=(\d{3})+$)/g, ','))
  }

  function fenZU(string) {
    string = 'ababa abbb ababab'
    console.log(string.match(/(ab)+/g))
  }

  function findYYYY(string) {
    string = '2023-23-23'
    console.log(string.match(/(\d{4})-(\d{2})-(\d{2})/g))
  }

  findYYYY()

  // fenZU()
  // getQianFenWwei()
  // ciBianJie()
  // findColor()
  // findGood()

  // let oldString = 'base-string'
  // const newString = oldString.replace(/-/g, '#')
  // console.log('oldString', oldString)
  // console.log('newString', newString)
}
