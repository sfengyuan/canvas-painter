import Tool from './tool.js'
import Pencil from './pencil.js'


export default new Tool('Eraser', (e, cx, onEnd) => {
  cx.globalCompositeOperation = 'destination-out'
  Pencil.fn(e, cx, _ => {
    cx.globalCompositeOperation = 'source-over'
  })
})
