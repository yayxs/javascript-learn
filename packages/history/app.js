const PopStateEventType = 'popstate'
export function createBrowserHistory(options) {
  let { window = document.defaultView } = options
  let globalHistory = window.history
  console.log('glo', globalHistory)
  let history = {}
  function getIndexAndLocation() {
    let { pathname, search, hash } = window.location
    let state = globalHistory.state || {}

    return [
      state.idx,
      {
        pathname,
        search,
        hash,
        state: state.usr || null,
        key: state.key || 'default'
      }
    ]
  }

  let blockedPopTx = null

  function handlePop() {}
  window.addEventListener(PopStateEventType, handlePop)
  return history
}

/**
 * 创建事件
 */
function createEvents() {
  const handlers = []
  return {
    get length() {
      return handlers.length
    },
    push(fn) {
      return function () {
        handlers = handlers.filter((handler) => handler !== fn)
      }
    },
    call(arg) {
      handlers.forEach((fn) => fn && fn(arg))
    }
  }
}
