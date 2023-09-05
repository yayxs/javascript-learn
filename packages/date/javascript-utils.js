/**
 *
 * @param {number} hours
 * @param {number} minutes
 * @param {boolean} isLowercase
 * @param {boolean} hasPeriod
 */
function defaultMeridiem(hours, minutes, isLowercase, hasPeriod) {
  let m = hours < 12 ? 'AM' : 'PM'

  return isLowercase ? m.toLowerCase() : m
}
const REGEX_FORMAT =
  /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g

const REGEX_PARSE =
  /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/

/**
 *
 * @param {[object Date]} date
 * @param {string} formatStr
 * @param {object} options
 */
function formatDate(date, formatStr, options = {}) {
  const years = date.getFullYear()
  const month = date.getMonth()
  const days = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const milliseconds = date.getMilliseconds()
  const day = date.getDay() // 星期
  const meridiem = options.customMeridiem ?? defaultMeridiem

  const matches = {
    YY: () => String(years).slice(-2),
    YYYY: () => String(years),
    M: () => month + 1,
    MM: () => `${month + 1}`.padStart(2, '0'),
    D: () => String(days),
    DD: () => `${days}`.padStart(2, '0'),
    H: () => String(hours),
    HH: () => `${hours}`.padStart(2, '0'),
    m: () => String(minutes),
    mm: () => `${minutes}`.padStart(2, '0'),
    s: () => String(seconds),
    ss: () => `${seconds}`.padStart(2, '0'),
    d: () => day
  }

  const res = formatStr.replace(REGEX_FORMAT, (match, $1) => {
    return $1 ?? matches[match]?.() ?? match
  })
  console.log(res)
}

/**
 *
 * @param {DateLike} date
 */
function normalizeDate(date) {
  /** null */
  if (date === null) {
    // console.log(new Date(Number.NaN)) // 非数字Not-A-Number Invalid Date

    return new Date(Number.NaN)
  }
  /** 没有传值默认当前 */
  if (date === undefined) {
    return new Date()
  }
  /** 属于Date */
  if (date instanceof Date) {
    return new Date(date)
  }

  /** 字符串 */
  if (typeof date === 'string' && !/Z$/i.test(date)) {
    const d = date.match(REGEX_PARSE)
    if (d) {
      const m = d[2] - 1 || 0
      const ms = (d[7] || '0').substring(0, 3)
      return new Date(d[1], m, d[3] || 1, d[4] || 0, d[5] || 0, d[6] || 0, ms)
    }

    return
  }
  /** 直接返回 */
  return new Date(date)
}

formatDate(normalizeDate('2022-8-12'), 'YYYY-MM-DD HH:mm:ss')
