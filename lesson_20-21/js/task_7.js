class RandomLists {
  constructor(listNumbers) {
    this.listNumbers = listNumbers
    this.lists = []
    this.el = this.createLists()
  }

  randomNumbers(min, max) {
    return Math.floor(Math.random() * max - min + 1) + min
  }

  pairOrNot(event) {
    let elem = event.target
    while (elem.previousElementSibling) {
      elem = elem.previousElementSibling
      if (elem.children.length % 2 == 0) elem.style.color = "green"
      else elem.style.color = "red"
    }
  }

  displayList() {
    for (const list of this.lists) {
      let ol = document.createElement("ol")
      for (const num of list) {
        let li = document.createElement("li")
        li.innerText = num
        ol.append(li)
        this.listCont.append(ol)
      }
    }
    let button = document.createElement("button")
    button.innerText = "Натисни"
    button.addEventListener("click", this.pairOrNot.bind(this))
    this.listCont.append(button)
  }
  createLists() {
    this.listCont = document.createElement("div")
    this.listCont.className = "lists-container"
    for (let i = 0; i < this.listNumbers; i++) {
      let rand = this.randomNumbers(1, 10)
      let list = []
      for (let j = 0; j < rand; j++) {
        let randNum = this.randomNumbers(1, 100)
        list.push(randNum)
      }
      this.lists.push(list)
    }
    return this.listCont
  }

  render(targetElement) {
    let container = document.querySelector(targetElement)
    container.append(this.el)
    this.displayList()
  }
}

window.onload = function () {
  let list = new RandomLists(5)
  list.render(".container")
}
