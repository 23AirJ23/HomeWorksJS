// Завдання 1. Відпустка
function vacation() {
  let vacationDays = 56
  let date = new Date()
  let workBegins = date.setDate(date.getDate() + vacationDays)
  let result = new Date(workBegins).toLocaleDateString()
  let vacationDiv = document.querySelector(".vacation")
  vacationDiv.innerHTML = `На момент поверення дата буде: ${result}`
}

// Завдання 2. Йогурт
function yogurt() {
  let productionYear = parseInt(prompt(`Введіть рік виробництва йогурта`))
  let productionMonth = parseInt(prompt(`Введіть місяць виробництва йогурта`)) - 1
  let productionDay = parseInt(prompt(`Введіть день виробництва йогурта`))
  let expirationDays = 30
  let productDate = new Date(productionYear, productionMonth, productionDay).getTime()
  let currentDate = new Date().getTime()
  let difference = (currentDate - productDate) / 86400000
  let yogurtDiv = document.querySelector(".yogurt")
  let pastDedline = Math.abs(difference.toFixed() - expirationDays)
  if (difference > expirationDays) {
    yogurtDiv.innerHTML = `Не придатний. Просрочка: ${pastDedline} дні(в)`
  } else {
    yogurtDiv.innerHTML = `Придатний. Залишилось ще: ${pastDedline} дні(в)`
  }
}

// Завдання 3. Час сортування
let numbersList = []
function random() {
  for (let i = 0; i < 1000; i++) {
    let rand = Math.floor(Math.random() * 800) + 1
    numbersList.push(rand)
  }
}

function bubbles() {
  let newArr = Array.from(numbersList)
  let start = Date.now()

  let changed
  do {
    changed = false
    for (let i = 1; i < newArr.length; i++) {
      if (newArr[i - 1] > newArr[i]) {
        let temp = newArr[i - 1]
        newArr[i - 1] = newArr[i]
        newArr[i] = temp
        changed = true
      }
    }
  } while (changed)

  let end = Date.now()
  let result = end - start
  let bubblesDiv = document.querySelector(".bubbles")
  bubblesDiv.innerHTML = `Cортування бульбашкою зайняло: ${result}мс.`
}

function insert() {
  let newArr = Array.from(numbersList)
  let start = Date.now()
  for (let k = 1; k < newArr.length; k++) {
    const current = newArr[k]
    let i = k - 1
    while (i >= 0 && newArr[i] > current) {
      newArr[i + 1] = newArr[i]
      i = i - 1
    }
    newArr[i + 1] = current
  }

  let end = Date.now()
  let result = end - start
  let insertDiv = document.querySelector(".insert")
  insertDiv.innerHTML = `Cортування вставкою зайняло: ${result}мс.`
}

function additionTask() {
  let start = Date.now()
  let question = parseInt(prompt(`Скільки буде 37 + 56`))
  let end = Date.now()
  let result = (end - start) / 1000
  let additionDiv = document.querySelector(".addition")
  additionDiv.innerHTML = `Ви витратили на додавання: ${result.toFixed(1)}c.`
}

window.onload = function () {
  random()
  bubbles()
  insert()
  vacation()
  yogurt()
  additionTask()
}
