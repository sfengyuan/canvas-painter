import { elt, bindDown } from './helpers.js'
import toolbar from './toolbar.js'
const board = {}
board.el = elt('canvas', { style: '' })

bindDown(board.el, e => {
  // if (e.which === 1) {
    toolbar.tools[toolbar.selected].fn(e, board.el.getContext('2d'))
    e.preventDefault()
    e.stopPropagation()
  // }
})

export default board
