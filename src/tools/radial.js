import Tool from './tool.js'
import history from '../history.js'
import { trackDrag, relativePos } from '../helpers.js'

export default new Tool('radial', (e, cx, onEnd) => {
  cx.lineCap = 'round'
  let originPos = relativePos(e, cx.canvas)

  trackDrag(function (e) {
    cx.beginPath()
    cx.moveTo(originPos.x, originPos.y)
    let pos = relativePos(e, cx.canvas)
    cx.lineTo(pos.x, pos.y)
    cx.stroke()
  }, e => history.save(cx))
})
