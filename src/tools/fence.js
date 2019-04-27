import Tool from './tool.js'
import history from '../history.js'
import { trackDrag, relativePos } from '../helpers.js'

export default new Tool('fence', (e, cx, onEnd) => {
  cx.lineCap = 'round'
  let pos = relativePos(e, cx.canvas)

  trackDrag(function (e) {
    const bl = document.querySelector('.length-range .range-input').value
    cx.beginPath()
    cx.moveTo(pos.x, pos.y)
    pos = relativePos(e, cx.canvas)

    cx.lineTo(pos.x, pos.y + cx.lineWidth * bl + 20)
    cx.stroke()
  }, e => { history.save(cx) })
})
