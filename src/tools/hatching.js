import Tool from './tool.js'
import history from '../history.js'
import { trackDrag, relativePos, randomInt } from '../helpers.js'

export default new Tool('hatching', (e, cx, onEnd) => {
  cx.lineCap = 'round'
  cx.lineJoin = 'round'
  let pos = relativePos(e, cx.canvas)
  trackDrag(function (e) {
    const bl = document.querySelector('.length-range .range-input').value

    cx.beginPath()
    cx.moveTo(pos.x, pos.y)
    pos = relativePos(e, cx.canvas)
    cx.lineTo(pos.x + randomInt(0, cx.lineWidth * bl + 5), pos.y - randomInt(0, cx.lineWidth * bl + 10))
    cx.lineTo(pos.x - randomInt(0, cx.lineWidth * bl + 5), pos.y + randomInt(0, cx.lineWidth * bl + 10))
    cx.lineTo(pos.x + randomInt(0, cx.lineWidth * bl + 5), pos.y + randomInt(0, cx.lineWidth * bl + 10))
    cx.stroke()
  }, e => { history.save(cx) })
})
