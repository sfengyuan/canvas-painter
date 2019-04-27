export default {
  max: 5,
  state: [],
  step: -1,

  save: function (cx) {
    var undo = document.querySelector('.btn-undo')
    var redo = document.querySelector('.btn-redo')

    if (this.step < this.max - 1) {
      this.step++
    }
    if (this.step > 0) {
      undo.setAttribute('class', 'btn btn-undo available')
    }

    if (this.step < this.state.length - 1) {
      this.state.length = this.step
    }
    if (this.state.length >= this.max) {
      this.state.shift()
    }

    this.state.push(cx.canvas.toDataURL())
    redo.setAttribute('class', 'btn btn-redo unavailable')
  },
  undo: function (cx) {
    var undo = document.querySelector('.btn-undo')
    var redo = document.querySelector('.btn-redo')

    if (this.step === 0) {
      this.step--
      cx.clearRect(0, 0, cx.canvas.width, cx.canvas.height)
    }
    if (this.step > 0) {
      this.step--

      if (this.step <= this.max) {
        redo.setAttribute('class', 'btn btn-redo available')
      }
      if (this.step < 1) {
        undo.setAttribute('class', 'btn btn-undo unavailable')
      }

      let lastImage = this.state[this.step]
      var img = document.createElement('img')
      img.src = lastImage
      img.onload = function () {
        cx.clearRect(0, 0, cx.canvas.width, cx.canvas.height)
        cx.drawImage(img, 0, 0)
      }
    }
  },

  redo: function (cx) {
    var redo = document.querySelector('.btn-redo')
    var undo = document.querySelector('.btn-undo')

    if (this.step < this.state.length - 1) {
      this.step++

      if (this.step >= this.state.length - 1) {
        redo.setAttribute('class', 'btn btn-redo unavailable')
      }
      if (this.step >= 0) {
        undo.setAttribute('class', 'btn btn-undo available')
      }

      let lastImage = this.state[this.step]
      var img = document.createElement('img')
      img.src = lastImage
      img.onload = function () {
        cx.clearRect(0, 0, cx.canvas.width, cx.canvas.height)
        cx.drawImage(img, 0, 0)
      }
    }
  }
}
