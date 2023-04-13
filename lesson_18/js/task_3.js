function getAge() {
  let year = parseInt(document.getElementById("year").value)
  let currentYear = new Date().getFullYear()
  let userAge = `Ваш вік: ${currentYear - year}`
  let div = (document.createElement("div").innerHTML = userAge)
  document.getElementById("but_age").after(div)
}
window.onload = function () {
  document.getElementById("but_age").onclick = getAge
}
