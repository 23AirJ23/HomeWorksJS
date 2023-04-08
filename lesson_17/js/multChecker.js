export default class MultChecker {
  constructor() {}

  getRundomNUmber() {
    return Math.floor(Math.random() * 10) + 1
  }
  testUser() {
    let num1 = this.getRundomNUmber()
    let num2 = this.getRundomNUmber()
    let result = num1 * num2
    let userAnswer = prompt(`Скільки буде ${num1} * ${num2}`)
    return [num1, num2, "*", result, userAnswer]
  }
}
