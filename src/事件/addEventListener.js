document.addEventListener('DOMContentLoaded',()=>{
  console.log('load');
})

const dom  = document.querySelector('#ele-btn')

console.log(dom)


/**
 * isTrusted
 * altKey Alt
 * button 0 左键 1 中键 2 右键
 * buttons
 * cancelBubble
 * cancelable
 * clientX
 * clientY
 * composed
 * ctrlKey
 * currentTarget
 * defaultPrevented
 * detail
 * height
 * isPrimary
 * metaKey Cmd
 * movementX
 * movementY
 * offsetX
 * offsetY
 * pageX
 * pageY
 * path
 * screenX
 * screenY
 * srcElement
 * shiftKey Shift
 * target
 * type
 * x
 * y
 * width
 * which 弃用
 */
dom.onclick = function(event){
  console.log(event)
}