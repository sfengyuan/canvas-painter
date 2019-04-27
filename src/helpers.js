function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function elt (name, attr = {}, ...text) {
  const node = document.createElement(name)
  Object.keys(attr).forEach(k => {
    node.setAttribute(k, attr[k])
  })

  text.forEach(t => {
    if (typeof t === 'string') {
      t = document.createTextNode(t)
    }
    node.appendChild(t)
  })
  return node
}
// get cursor position in canvas
function relativePos (e, element) {
  const rect = element.getBoundingClientRect()
  let { x, y } = getDownXY(e)
  return {
    x: Math.floor(x - rect.left),
    y: Math.floor(y - rect.top)
  }
}

function getDownXY (e) {
  if (e.clientX) {
    return { x: e.clientX, y: e.clientY }
  }

  return {
    x: e.changedTouches[0].clientX,
    y: e.changedTouches[0].clientY
  }
}

function trackDrag (onMove, onEnd = e => {}) {
  function end (e) {
    removeMove(onMove)
    removeUp(end)
    onEnd(e)
  }
  bindMove(onMove)
  bindUp(end)
}

function bindDown (el = window, onDown) {
  let type = ''
  // avoid touch and click fired at the same time
  function down (e) {
    if (!type) {
      type = e.type
    }
    if (e.type === type) {
      onDown(e)
    }
  }
  el.addEventListener('mousedown', down)
  el.addEventListener('touchstart', down)
}

function bindMove (onMove) {
  window.addEventListener('mousemove', onMove)
  window.addEventListener('touchmove', onMove)
}

function bindUp (onUp) {
  window.addEventListener('mouseup', onUp)
  window.addEventListener('touchend', onUp)
}

function removeMove (onMove) {
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('touchmove', onMove)
}

function removeUp (onEnd) {
  window.removeEventListener('mouseup', onEnd)
  window.removeEventListener('touchend', onEnd)
}

function randomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function randomPointInRadius (radius) {
  while (true) {
    var x = Math.random() * 2 - 1
    var y = Math.random() * 2 - 1
    if (x * x + y * y <= 1) {
      return { x: x * radius, y: y * radius }
    }
  }
}

function readFile () {
  const reader = new window.FileReader()
  return (file, cb) => {
    reader.readAsDataURL(file)
    reader.addEventListener('load', _ => cb(reader.result))
  }
}

export {
  capitalize,
  elt,
  relativePos,
  trackDrag,
  randomPointInRadius,
  randomInt,
  readFile,
  bindDown
}
