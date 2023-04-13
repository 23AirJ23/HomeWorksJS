function createInputs() {
  let userNum = parseInt(document.getElementById("evaluation").value)
  let div = document.createElement("div")
  div.classList.add("new-inputs")
  for (let i = 0; i < userNum; i++) {
    let input = document.createElement("input")
    input.classList.add("new-inputs__item")
    div.append(input)
  }
  let button = document.querySelector(".inputs-create")
  button.after(div)
  let newButton = document.querySelector(".new-button")
  newButton.style.display = "block"
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
  let newButton = document.querySelector(".new-button")
  newButton.after(span)
}
window.onload = function () {
  let button = document.querySelector(".inputs-create")
  button.onclick = createInputs
  let newButton = document.querySelector(".new-button")
  newButton.onclick = getResult
}
