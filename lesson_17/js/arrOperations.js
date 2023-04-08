class ArrOperations {
  constructor(array) {
    this.array = array
  }

  static positiveNumber(array) {
    return array.reduce((prev, el) => (el > 0 ? (prev += 1) : prev), 0)
  }
  static negativeNumber(array) {
    return array.reduce((prev, el) => (el < 0 ? (prev += 1) : prev), 0)
  }
  static occurrencesNumber(array, number) {
    return array.reduce((prev, el) => (el === number ? (prev += 1) : prev), 0)
  }
  toString(number) {
    return `Кількість додатних: ${ArrOperations.positiveNumber(
      this.array
    )}<br>Кількість від'ємних: ${ArrOperations.negativeNumber(
      this.array
    )}<br>Кількість входжень ${ArrOperations.occurrencesNumber(this.array, number)}<br>`
  }
}
let r = new ArrOperations([2, 4, 7, -5, 12, 4, -10, 56, 4, -49])
let m = new ArrOperations([-25, -8, 7, -5, 12, 8, -10, 56, 8, -49])
document.write(r.toString(4))
document.write(m.toString(8))
