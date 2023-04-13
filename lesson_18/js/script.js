// Перше завдання ------------------------------------------------
function summ() {
  let num1 = parseFloat(document.getElementById("inp1").value)
  let num2 = parseFloat(document.getElementById("inp2").value)
  let summ = num1 + num2
  document.getElementById("res").value = summ
}
function minus() {
  let num1 = parseFloat(document.getElementById("inp1").value)
  let num2 = parseFloat(document.getElementById("inp2").value)
  let minus = num1 - num2
  document.getElementById("res").value = minus
}
function multiply() {
  let num1 = parseFloat(document.getElementById("inp1").value)
  let num2 = parseFloat(document.getElementById("inp2").value)
  let multiply = num1 * num2
  document.getElementById("res").value = multiply
}
function division() {
  let num1 = parseFloat(document.getElementById("inp1").value)
  let num2 = parseFloat(document.getElementById("inp2").value)
  let division = num1 / num2
  document.getElementById("res").value = division.toFixed(2)
}

// window.onload = function () {
//   document.getElementById("plus").onclick = summ
//   document.getElementById("minus").onclick = minus
//   document.getElementById("multiply").onclick = multiply
//   document.getElementById("division").onclick = division
// }
// Друге завдання -------------------------------------------------
function convert() {
  const euroCourse = 40
  const dollarCourse = 37.4
  let grn = parseFloat(document.getElementById("grn").value)
  let euro = grn / euroCourse
  let dollar = grn / dollarCourse
  document.getElementById("euro").value = euro.toFixed(2)
  document.getElementById("dol").value = dollar.toFixed(2)
}
// window.onload = function () {
//   document.getElementById("convert").onclick = convert
// }
// Третє завдання -------------------------------------------------
function getAge() {
  let year = parseInt(document.getElementById("year").value)
  let currentYear = new Date().getFullYear()
  let userAge = `Ваш вік: ${currentYear - year}`
  let div = (document.createElement("div").innerHTML = userAge)
  document.getElementById("but_age").after(div)
}
// window.onload = function () {
//   document.getElementById("but_age").onclick = getAge
// }
// Четверте завдання -------------------------------------------------
function wishList() {
  let wishList = ["Авто", "Гроші", "Будинок на пляжі", "Острів", "Любов", "Здоров'я"]
  let num = wishList.length
  for (let i = 1; i <= 3; i++) {
    let randomNumber = Math.floor(Math.random() * num)
    let wish = `Бажання номер ${[i]}: ${wishList[randomNumber]};`
    let div = document.createElement("div")
    div.innerHTML = wish
    document.getElementsByTagName("main")[0].append(div)
    wishList.splice(randomNumber, 1)
    num--
  }
}
//window.onload = wishList
// П'яте завдання -------------------------------------------------
function createTable() {
  let table = document.createElement("table")
  for (let i = 0; i < 3; i++) {
    let tr = document.createElement("tr")
    for (let j = 0; j < 4; j++) {
      let randomNumber = Math.floor(Math.random() * 100) + 1
      let td = document.createElement("td")
      td.append(randomNumber)
      tr.append(td)
      table.append(tr)
    }
  }
  document.getElementById("table").append(table)
}
//window.onload = createTable
// Шосте завдання -------------------------------------------------
function createInputs() {
  let userNum = parseInt(document.getElementById("evaluation").value)
  let div = document.createElement("div")
  div.classList.add("new-inputs")
  for (let i = 0; i < userNum; i++) {
    let input = document.createElement("input")
    input.classList.add("new-inputs__item")
    div.append(input)
  }
  let button = document.getElementsByClassName("inputs-create")
  button[0].after(div)
  let newButton = document.getElementsByClassName("new-button")
  newButton[0].style.display = "block"
}
function getResult() {
  let inputs = document.getElementsByClassName("new-inputs__item")
  let summ = 0
  for (let i = 0; i < inputs.length; i++) {
    summ += parseInt(inputs[i].value)
  }
  let averageValue = summ / inputs.length
  let span = document.createElement("span")
  span.textContent = `Середнє значення: ${averageValue}`
  let newButton = document.getElementsByClassName("new-button")
  newButton[0].after(span)
}
// window.onload = function () {
//   let button = document.getElementsByClassName("inputs-create")
//   button[0].onclick = createInputs
//   let newButton = document.getElementsByClassName("new-button")
//   newButton[0].onclick = getResult
// }
// Сьоме завдання -------------------------------------------------
function transport() {
  let select = parseInt(document.getElementById("select").value)
  let checkboxes = document.getElementsByClassName("checkbox")
  let checkSumm = 0
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      checkSumm += parseInt(checkboxes[i].getAttribute("price"))
    }
  }
  let radioButtons = document.getElementsByName("guide")
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      checkSumm += parseInt(radioButtons[i].getAttribute("price"))
    }
  }
  let finalSumm = checkSumm + select
  let inpRes = document.getElementById("summ")
  inpRes.value = `${finalSumm}грн.`
}
window.onload = function () {
  let getRes = document.getElementById("getRes")
  getRes.onclick = transport
}
