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
window.onload = createTable
