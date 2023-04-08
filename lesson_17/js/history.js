export default class History {
  constructor(data) {
    this.historyList = data
  }

  toString() {
    let list = ``
    for (const result of this.historyList) {
      list += `<b>Перше число</b>: ${result.firstNum}; <b>Друге число</b>: ${result.secondNum}; <b>Оператор</b>: ${result.operation}; <b>Правильна відповідь</b>: ${result.correctAnswer}; <b>Відповідь користувача</b>: ${result.userAnswer}<br>`
    }
    return list
  }
}
