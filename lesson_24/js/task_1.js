let numbersString = ["247542", "246843", "547745", "468436", "632676"]
let number = "0504546626"
let yearsString = "Я народився 2001, а в школу пішов 2007"

// Завдання 1 ------------------------------------------
function numberSameLetter() {
  let container = document.querySelector(".number-same-letters")
  let counter = 0
  for (const numbers of numbersString) {
    if (/\b(\d)(\d*)\1\b/.test(numbers)) {
      counter++
    }
  }
  container.innerHTML = `Кількість з однаковими літерами: ${counter}`
}
// Завдання 2 ------------------------------------------
function replaceNumber(match, p1, p2, p3, p4, p5) {
  return `+38${p1}-${p2}-${p3}-${p4}-${p5}`
}
function changeNumberFormat() {
  let container = document.querySelector(".change-number-format")
  newNumber = number.replace(/(\d)(\d{2})(\d{2})(\d{3})(\d{2})/, replaceNumber)
  container.innerHTML = `Новий номер: ${newNumber}`
}

// Завдання 3 ------------------------------------------
function showPAfterYear() {
  let container = document.querySelector(".show-p-after-year")
  newString = yearsString.replace(/(?<=\d{4})\b/g, "р")
  container.innerHTML = newString
}

// Завдання 4 ------------------------------------------
function bigNumber() {
  let container = document.querySelector(".big-number")
  let userNum = prompt("Введіть велике число")
  let newNum = userNum.replace(/\d{3}/g, "$& ")

  container.innerHTML = `Число з пробілами: ${newNum}`
}

window.onload = function () {
  numberSameLetter()
  changeNumberFormat()
  showPAfterYear()
  bigNumber()
}
