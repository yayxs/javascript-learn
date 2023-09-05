import dec from './decapitalize'
import trim from './trim'
export default function camelize(str, decapitalize) {
  str = trim(str).replace(/[-_\s]+(.)?/g, (m, c) => {
    return c ? c.toUpperCase() : ''
  })

  if (decapitalize === true) {
    return dec(str)
  } else {
    return str
  }
}

console.log(camelize('-moz-transform'))
