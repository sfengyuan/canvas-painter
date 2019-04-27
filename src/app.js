import '../assets/css/main.css'

import { elt } from './helpers.js'
import toolbar from './toolbar.js'
import menubar from './menubar.js'
import propertybar from './propertybar.js'
import board from './board.js'

export default function app (
  width = document.documentElement.clientWidth,
  height = document.documentElement.clientHeight
) {
  board.el.width = width
  board.el.height = height - 80

  return elt(
    'div',
    {
      class: 'paint-wrapper'

    },
    toolbar.el,
    menubar.el,
    propertybar.el,
    board.el
  )
}
