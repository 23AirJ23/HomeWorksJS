function convert() {
  const euroCourse = 40
  const dollarCourse = 37.4
  let grn = parseFloat(document.getElementById("grn").value)
  let euro = grn / euroCourse
  let dollar = grn / dollarCourse
  document.getElementById("euro").value = euro.toFixed(2)
  document.getElementById("dol").value = dollar.toFixed(2)
}
window.onload = function () {
  document.getElementById("convert").onclick = convert
}
