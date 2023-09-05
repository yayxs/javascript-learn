export default function toPositive(number) {
  if (number < 0) {
    return 0
  } else {
    return +number || 0
  }
}
