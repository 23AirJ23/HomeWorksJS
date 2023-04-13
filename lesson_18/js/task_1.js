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

window.onload = function () {
  document.getElementById("plus").onclick = summ
  document.getElementById("minus").onclick = minus
  document.getElementById("multiply").onclick = multiply
  document.getElementById("division").onclick = division
}
