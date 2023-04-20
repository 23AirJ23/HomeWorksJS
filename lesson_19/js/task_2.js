class Sportsmen {
  constructor(sportsmensList, cssObject) {
    this.sportsmensCommonList = sportsmensList
    this.selectedList = []
    this.greenArrow = `./img/greenArrow.png`
    this.redArrow = `./img/redArrow.png`
    this.cssObject = {
      listDiv: `sport-list`,
      listButton: `list-button`,
      itemArrow: `common-image`,
      ...(cssObject ?? {}),
    }
  }

  createList(list, arrowSrc) {
    this.container = document.querySelector(".two-lists")
    let namesList = document.createElement("div")
    namesList.className = this.cssObject.listDiv
    this.container.append(namesList)

    for (let i = 0; i < list.length; i++) {
      this.itemButton = document.createElement("div")
      this.itemButton.className = this.cssObject.listButton
      this.itemButton.innerHTML = list[i]
      let itemArrow = document.createElement("img")
      itemArrow.className = this.cssObject.itemArrow
      itemArrow.src = arrowSrc
      itemArrow.onclick = this.chooseSportsmen.bind(this, list[i])
      this.itemButton.append(itemArrow)
      namesList.append(this.itemButton)
    }
  }
  chooseSportsmen(text) {
    if (this.sportsmensCommonList.includes(text)) {
      let ind = this.sportsmensCommonList.findIndex(el => el === text)
      let item = this.sportsmensCommonList.splice(ind, 1)
      this.selectedList.push(item)
      this.container.innerHTML = ``
      this.createList(this.sportsmensCommonList, this.greenArrow)
      this.createList(this.selectedList, this.redArrow)
    }
    if (this.selectedList.includes(text)) {
      let ind = this.selectedList.findIndex(el => el === text)
      let item = this.selectedList.splice(ind, 1)
      this.sportsmensCommonList.push(item)
      this.container.innerHTML = ``
      this.createList(this.sportsmensCommonList, this.greenArrow)
      this.createList(this.selectedList, this.redArrow)
    }
  }
}

window.onload = function () {
  let sp = new Sportsmen(sportsmensList)
  sp.createList(sp.sportsmensCommonList, sp.greenArrow)
  sp.createList(sp.selectedList, sp.redArrow)
}

let sportsmensList = [
  "Майкл Джордан",
  "Мухаммед Али",
  "Уэйн Гретцки",
  "Усэйн Болт",
  "Майкл Фелпс",
  "Бо Джексон",
  "Роджер Федерер",
]
