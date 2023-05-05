let count = 0
function getColor() {
  localStorage.clear()
  let color = document.getElementById("color").value
  localStorage.setItem("userColor", color)
  count++
  localStorage.setItem("UserChanges", count)
}

window.onload = function () {
  document.getElementById("color").oninput = getColor
}
