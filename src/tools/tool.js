import { elt, capitalize } from '../helpers.js'

export default class Tool {
  constructor (name, fn) {
    name = name.toLowerCase()
    this.name = name
    this.fn = fn
    this.el = elt('button',
      { class: `btn tools tool-${name}`, 'data-name': name },
      capitalize(name))
  }
}
