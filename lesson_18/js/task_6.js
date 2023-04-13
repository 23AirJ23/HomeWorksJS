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
window.onload = function () {
  let button = document.getElementsByClassName("inputs-create")
  button[0].onclick = createInputs
  let newButton = document.getElementsByClassName("new-button")
  newButton[0].onclick = getResult
}
