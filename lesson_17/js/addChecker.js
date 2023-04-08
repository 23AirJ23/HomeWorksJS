export default class AddChecker {
  constructor(min, max) {
    this.min = min
    this.max = max
  }

  getRundomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  testUser() {
    let num1 = this.getRundomNumber(this.min, this.max)
    let num2 = this.getRundomNumber(this.min, this.max)
    let result = num1 + num2
    let userAnswer = prompt(`Скільки буде ${num1} + ${num2}`)
    return [num1, num2, "+", result, userAnswer]
  }
}
