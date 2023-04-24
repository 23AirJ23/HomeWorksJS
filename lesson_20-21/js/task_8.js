window.onload = function () {
  let td = document.getElementsByTagName("td")
  Array.from(td).forEach(el => {
    el.innerText = Math.floor(Math.random() * 100)

    el.onclick = function (event) {
      let table = el.closest("table")
      if (table) table.style.border = `1px solid red`
      table.previousSibling.innerText++
    }
  })
}
