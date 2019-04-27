import Tool from './tool.js'
import history from '../history.js'
import { trackDrag, relativePos } from '../helpers.js'

export default new Tool('pencil', (e, cx, onEnd = () => {}) => {
  cx.lineCap = 'round'
  let pos = relativePos(e, cx.canvas)
  console.log('pos', pos)
  trackDrag(e => {
    cx.beginPath()
    cx.moveTo(pos.x, pos.y)
    pos = relativePos(e, cx.canvas)
    cx.lineTo(pos.x, pos.y)
    cx.stroke()
  }, e => {
    onEnd()
    history.save(cx)
  })
})
