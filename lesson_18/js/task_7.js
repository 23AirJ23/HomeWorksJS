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
