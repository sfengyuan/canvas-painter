import Tool from './tool.js'
import { trackDrag, relativePos, randomPointInRadius } from '../helpers.js'

export default new Tool('sprayer', (e, cx, onEnd) => {
  const radius = cx.lineWidth * 2 + 4
  const area = radius * radius * Math.PI
  const dotsPerTick = Math.ceil(area / 30)

  let currentPos = relativePos(e, cx.canvas)
  const spray = setInterval(_ => {
    for (let i = 0; i < dotsPerTick; i++) {
      const offset = randomPointInRadius(radius)
      const bl = document.querySelector('.length-range .range-input').value
      cx.fillRect(currentPos.x + offset.x, currentPos.y + offset.y, bl, bl)
    }
  }, 25)
  trackDrag(e => {
    currentPos = relativePos(e, cx.canvas)
  }, _ => {
    clearInterval(spray)
  })
})
