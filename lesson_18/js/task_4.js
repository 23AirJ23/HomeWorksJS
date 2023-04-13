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
window.onload = wishList
