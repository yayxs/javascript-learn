let NAN = 0 / 0

function baseToNumber(value) {
  if (typeof value === 'number') {
    return value
  }

  return +value
}
function createMathOperation(operator, defaultValue) {
  return function (value, other) {
    let result
    if (value === undefined && other === undefined) {
      return defaultValue
    }

    if (value !== undefined) {
      result = value
    }
    if (other !== undefined) {
      if (result === undefined) {
        return other
      }

      if (typeof value === 'string' || typeof other === 'string') {
      } else {
        value = baseToNumber(value)
        other = baseToNumber(other)
      }
      result = operator(value, other)
    }
    return result
  }
}

const add = createMathOperation(function (a, b) {
  return a + b
}, 0)

console.log(add(1, 2))
