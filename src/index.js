
import app from './app.js'
import { elt } from './helpers.js'

document.body.appendChild(app())

let home = elt('a', { href: 'http://ziox.xyz' }, 'Home')
let source = elt('a', { href: 'https://github.com/jacobsun/canvas-painter' }, 'Source')
let div = elt('div', { class: 'link' }, home, source)
document.body.appendChild(div)
