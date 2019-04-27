import Tool from './tool.js'
import history from '../history.js'
import { trackDrag, relativePos } from '../helpers.js'

export default new Tool('strips', (e, cx, onEnd) => {
  cx.lineCap = 'round'
  let pos = relativePos(e, cx.canvas)

  trackDrag(function (e) {

    cx.beginPath()
    cx.moveTo(pos.x, pos.y)
    pos = relativePos(e, cx.canvas)

    cx.lineTo(pos.x + cx.lineWidth * document.querySelector('.length-range .range-input').value + 10, pos.y)
    cx.stroke()
  }, e => { history.save(cx) })
})
