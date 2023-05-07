class Generator {
  constructor(number, min, max) {
    this.number = number
    this.min = min
    this.max = max
  }

  randomNumber() {
    let rand = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
    return rand
  }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.number; i++) {
      let rand = this.randomNumber()
      if (rand % 2 === 0) {
        yield rand
      } else i--
    }
  }
}

window.onload = function () {
  let gen = new Generator(10, 0, 100)
  console.log(...gen)
}
