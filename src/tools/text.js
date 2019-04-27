import Tool from './tool.js'
import history from '../history.js'
import { elt, relativePos } from '../helpers.js'

export default new Tool('text', (event, cx) => {
  var textField = elt('input', { type: 'text', class: 'text-field' })

  var pos = relativePos(event, cx.canvas)

  textField.style.position = 'absolute'
  // 50 menu bar, 50 propertybar, minus 5 offsety
  textField.style.top = pos.y + 95 + 'px'
  textField.style.left = pos.x + 'px'
  cx.canvas.parentNode.appendChild(textField)

  textField.focus()
  textField.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) { // enter
      cx.font = Math.max(12, cx.lineWidth) + 'px sans-serif'
      cx.fillText(textField.value, pos.x, pos.y + 5)
      textField.blur()
      history.save(cx)
    }
    if (event.keyCode === 27) { // escape
      textField.blur()
    }
  }, false)

  textField.addEventListener('blur', function () {
    textField.parentNode.removeChild(textField)
  })
})
