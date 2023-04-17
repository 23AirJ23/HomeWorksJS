class Sportsmen {
  constructor(sportsmensList) {
    this.sportsmensCommonList = sportsmensList
    this.selectedList = []
    this.greenArrow = `./img/greenArrow.png`
    this.redArrow = `./img/redArrow.png`
  }
  showCommon() {
    this.container = document.querySelector(".two-lists")
    let commonDiv = document.createElement("div")
    commonDiv.className = "sport-list"

    this.container.append(commonDiv)

    for (let i = 0; i < this.sportsmensCommonList.length; i++) {
      this.commonButton = document.createElement("div")
      this.commonButton.className = `green-button`
      this.commonButton.innerHTML = this.sportsmensCommonList[i]
      let greenArrow = document.createElement("img")
      greenArrow.className = "common-image"
      greenArrow.src = this.greenArrow
      greenArrow.onclick = this.chooseSportsmen.bind(this, this.sportsmensCommonList[i])
      this.commonButton.append(greenArrow)
      commonDiv.append(this.commonButton)
    }
  }

  showChoosen() {
    let choosenDiv = document.createElement("div")
    choosenDiv.className = "sport-list"
    this.container.append(choosenDiv)
    for (let i = 0; i < this.selectedList.length; i++) {
      this.choosenButton = document.createElement("div")
      this.choosenButton.className = `red-button`
      this.choosenButton.innerHTML = this.selectedList[i]
      let redArrow = document.createElement("img")
      redArrow.className = "common-image"
      redArrow.src = this.redArrow
      redArrow.onclick = this.chooseSportsmen.bind(this, this.selectedList[i])
      this.choosenButton.append(redArrow)
      choosenDiv.append(this.choosenButton)
    }
  }
  chooseSportsmen(text) {
    if (this.sportsmensCommonList.includes(text)) {
      let ind = this.sportsmensCommonList.findIndex(el => el === text)
      let item = this.sportsmensCommonList.splice(ind, 1)
      this.selectedList.push(item)
      this.container.innerHTML = ``
      this.showCommon()
      this.showChoosen()
    }
    if (this.selectedList.includes(text)) {
      let ind = this.selectedList.findIndex(el => el === text)
      let item = this.selectedList.splice(ind, 1)
      this.sportsmensCommonList.push(item)
      this.container.innerHTML = ``
      this.showCommon()
      this.showChoosen()
    }
  }
}

window.onload = function () {
  let sp = new Sportsmen(sportsmensList)
  sp.showCommon()
  sp.showChoosen()
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
