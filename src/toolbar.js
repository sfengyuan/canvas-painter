import { elt, bindDown } from './helpers.js'
import propertyBar from './propertybar.js'
import board from './board.js'
import pencil from './tools/pencil.js'
import fence from './tools/fence.js'
import radial from './tools/radial.js'
import hatching from './tools/hatching.js'
import strips from './tools/strips.js'
import eraser from './tools/eraser.js'
import sprayer from './tools/sprayer.js'
import text from './tools/text.js'

const tools = {
  pencil,
  fence,
  strips,
  hatching,
  sprayer,
  radial,
  text,
  eraser
}
const el = elt('ul', { class: 'toolbar' })

Object.keys(tools).forEach(k => {
  el.appendChild(elt('li', {}, tools[k].el))
})

const toolbar = {
  tools,
  el,
  selected: 'pencil'
}

bindDown(el, e => {
  e.preventDefault()
  if (!e.target.dataset.name) return

  toolbar.selected = e.target.dataset.name
  board.el.dataset.tool = toolbar.selected

  propertyBar.modify(toolbar.selected)
})
export default toolbar
