import CreateHtmlElement from "./createHtmlTag.js"

class DinamicSearch {
  constructor(usersList, cssObject) {
    this.usersList = usersList
    this.newList = this.usersList
    this.cssObject = {
      searchContainer: `dinamic-search`,
      searchField: `search-field`,
      nameField: `name-field`,
      namesContainer: `names-list`,
      ...(cssObject ?? {}),
    }
    this.el = this.displayDS()
  }

  searchName(event) {
    this.namesContainer.innerHTML = ``
    this.newList = []
    for (const name of this.usersList) {
      if (name.toLowerCase().includes(event.detail.inpValue.toLowerCase())) this.newList.push(name)
    }
    this.fillList()
  }

  forInput() {
    let forInput = new CustomEvent("inp", {
      detail: {
        inpValue: this.input.value,
      },
    })
    this.el.dispatchEvent(forInput)
  }

  sesarchField() {
    let label = CreateHtmlElement.createElement({
      tag: "label",
      props: {
        className: this.cssObject.searchField,
        textContent: "Ім'я",
      },
    })

    this.input = CreateHtmlElement.createElement({
      tag: "input",
      props: {
        placeholder: `Я шукаю...`,
      },
      events: {
        input: this.forInput.bind(this),
      },
    })

    label.append(this.input)
    return label
  }

  fillList() {
    for (const name of this.newList) {
      let div = document.createElement("div")
      div.innerText = name
      this.namesContainer.append(div)
    }
  }

  displayDS() {
    let container = CreateHtmlElement.createElement({
      tag: "div",
      props: {
        className: this.cssObject.searchContainer,
      },
    })
    let search = this.sesarchField()

    this.namesContainer = CreateHtmlElement.createElement({
      tag: "div",
      props: {
        className: this.cssObject.namesContainer,
      },
    })
    container.append(search)
    container.append(this.namesContainer)
    this.fillList()

    return container
  }

  render(targetElement) {
    let container = document.querySelector(targetElement)
    this.el.addEventListener("inp", this.searchName.bind(this))
    container.append(this.el)
  }
}

let users = [`Іванов І.І.`, `Петров П.П.`, `Скрипка С.П.`, `Гончаренко Г.О.`, `Івась І.І.`]
window.onload = function () {
  let search = new DinamicSearch(users)
  search.render(`.search-container`)
}
