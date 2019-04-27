import { elt } from './helpers.js'
import board from './board.js'

const property = {}
property.color = function (cx) {
  const input = elt('input', {
    type: 'color',
    class: 'color-input',
    value: '#000000' })
  input.addEventListener('change', () => {
    cx.fillStyle = input.value
    cx.strokeStyle = input.value
  })
  return elt('div', { class: 'color-control' }, input)
}

property.brushSize = function (cx) {
  const span = elt('span', { class: 'range-output' }, '2')
  const range = elt('input', { class: 'range-input', type: 'range', min: '1', max: '10', value: '2' })
  cx.canvas.dataset.brushsize = 2
  range.addEventListener('input', () => {
    span.innerText = range.value
    switch (parseInt(range.value)) {
      case 1:
        cx.canvas.dataset.brushsize = 1
        break
      case 2:
        cx.canvas.dataset.brushsize = 2
        break
      case 3:
        cx.canvas.dataset.brushsize = 3
        break
      case 4:
        cx.canvas.dataset.brushsize = 4
        break
      case 5:
        cx.canvas.dataset.brushsize = 5
        break
      case 6:
        cx.canvas.dataset.brushsize = 6
        break
      case 7:
        cx.canvas.dataset.brushsize = 7
        break
      case 8:
        cx.canvas.dataset.brushsize = 8
        break
      case 9:
        cx.canvas.dataset.brushsize = 9
        break
      case 10:
        cx.canvas.dataset.brushsize = 10
        break
      default:
        cx.canvas.dataset.brushsize = 1
    }
  })
  range.addEventListener('change', () => {
    cx.lineWidth = range.value
  })
  return elt('div', { class: 'range-control size-range' }, range, span)
}

property.brushLength = function () {
  const span = elt('span', { class: 'range-output' }, '1')
  const range = elt('input', { class: 'range-input', type: 'range', min: '1', max: '50', value: '1' })
  range.addEventListener('input', () => {
    span.innerText = range.value
  })
  return elt('div', { class: 'range-control length-range hide' }, range, span)
}

const el = elt('div', { class: 'property-bar' })
Object.keys(property).forEach(k => {
  el.appendChild(property[k](board.el.getContext('2d')))
})

function modify (selected) {
  const brushLengthInput = document.querySelector('.length-range .range-input')
  const brushLength = document.querySelector('.length-range')

  switch (selected) {
    case 'pencil':
      brushLength.classList.add('hide')
      break
    case 'sprayer':
      brushLengthInput.setAttribute('max', '3')
      const blo = document.querySelector('.length-range .range-output')
      if (blo.innerText > 3) {
        blo.innerText = 3
      }
      break
    default:
      brushLength.classList.remove('hide')
      brushLengthInput.setAttribute('max', '50')
      break
  }
}
export default {
  el,
  modify
}
