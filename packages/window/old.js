import { createApp, ref } from 'vue'
import { getWindowSize } from './getWindowSize'
// console.log(window.scrollX)
console.log(window.scrollY)
// getWindowSize({})
/**
 *
 *
 *
 *
 *
 */

/**
 * 全局作用域
 */
var name
var fn = () => {}

/**
 * 窗口
 */
function logWin(params) {
  console.log(window.self)
  console.log(window.top) // 窗口本身
  console.log(window.parent)
  console.log(window.self === window.top)
  console.log(window.parent.parent)
}
// logWin()

// console.log(window.screenLeft)
// console.log(window.screenTop)
setTimeout(() => {
  window.moveTo(0, 0)
  // console.log(window.screenLeft)
  // console.log(window.screenTop)
}, 2000)

setTimeout(() => {
  window.moveBy(0, 100)
  // console.log(window.screenLeft)
  // console.log(window.screenTop)
}, 4000)

// console.log(window.devicePixelRatio)

function useDevicePixelRatio() {
  const pixelRatio = ref(1)
  if (window) {
    let media
    function observe() {
      pixelRatio.value = window?.devicePixelRatio
      cleanup()
      media = window.matchMedia(`(resolution: ${pixelRatio.value}dppx)`)
      media.addEventListener('change', observe, { once: true })
    }

    function cleanup() {
      media?.removeEventListener('change', observe)
    }
    observe()
  }

  return { pixelRatio }
}

const app = createApp()
app.mount('#app')
