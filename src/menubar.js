import history from './history.js'
import board from './board.js'
import { elt, readFile, bindDown } from './helpers.js'

const menu = {}
menu.edit = function (cx) {
  const undo = elt('button', { class: 'btn btn-undo unavailable', href: '###' }, 'Undo')
  const redo = elt('button', { class: 'btn btn-redo unavailable', href: '###' }, 'Redo')
  bindDown(undo, e => history.undo(cx))
  bindDown(redo, e => history.redo(cx))
  return elt('div', { class: 'menu-item redo-undo' }, undo, redo)
}

menu.reset = function (cx) {
  const button = elt('button', { class: 'btn btn-reset', href: '###' }, 'Clear')
  function clear (e) {
    cx.clearRect(0, 0, cx.canvas.width, cx.canvas.height)
  }
  bindDown(button, clear)
  return elt('div', { class: 'menu-item reset' }, button)
}

menu.save = function (cx) {
  const button = elt('button', { class: 'btn btn-download' }, 'Download')

  bindDown(button, _ => {
    let a = elt('a', {
      href: cx.canvas.toDataURL('image/png'),
      download: 'painting' + Date.now(),
      target: '_blank' })
    document.body.appendChild(a)
    a.click()
  })
  return elt('div', { class: 'menu-item menu-download' }, button)
}

function loadImageURL (cx, url) {
  const image = document.createElement('img')
  image.addEventListener('load', _ => {
    const color = cx.fillStyle
    const size = cx.lineWidth
    cx.canvas.width = image.width
    cx.canvas.height = image.height
    cx.drawImage(image, 0, 0)
    cx.fillStyle = color
    cx.strokeStyle = color
    cx.lineWidth = size
  })
  image.src = url
}

const reader = readFile()
menu.openFile = function (cx) {
  const input = elt('input', { accept: 'image/*', class: 'input-file', type: 'file' })
  input.addEventListener('change', _ => {
    reader(input.files[0], result => loadImageURL(cx, result))
  })
  return elt('div', { class: 'menu-item menu-file' }, input)
}
const menubar = elt('div', { class: 'menu' })
Object.keys(menu).forEach(k => {
  menubar.appendChild(menu[k](board.el.getContext('2d')))
})

export default {
  el: menubar
}
