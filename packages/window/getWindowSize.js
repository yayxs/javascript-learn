export function getWindowSize(options) {
  const { includeScrollbar = false } = options

  if (includeScrollbar) {
    console.log(window.innerWidth)
    console.log(window.innerHeight)
  } else {
    console.log(window.document.documentElement.clientWidth)
    console.log(window.document.documentElement.clientHeight)
  }
}
