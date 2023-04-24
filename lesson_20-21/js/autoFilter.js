import CreateHtmlElement from "./createHtmlTag.js"
import AddFilterForm from "./addFilterForm.js"

class AutoSelection {
  constructor(auto, cssObject) {
    this.autoList = auto
    this.newList = this.autoList
    this.cssObject = {
      mainContainer: `auto-container`,
      autoListDiv: `auto-list`,
      oneAuto: `one-auto`,
      option: `option`,
      ...(cssObject ?? {}),
    }
    this.selectAuto
    this.selectYear
    this.el = this.createList()
  }

  filterAuto(event) {
    this.newList = []
    if (event.target.id === "auto") this.selectAuto = event.target.value
    if (event.target.id === "year") this.selectYear = event.target.value
    if (this.selectAuto && this.selectYear) {
      for (const auto of this.autoList) {
        if (auto.brand === this.selectAuto && auto.year === this.selectYear) {
          this.newList.push(auto)
          this.displayList()
        }
      }
    }
  }

  createList() {
    let filterContainer = CreateHtmlElement.createElement({
      tag: "div",
      props: {
        className: this.cssObject.mainContainer,
      },
    })

    let filterBlock = new AddFilterForm().el
    this.autoBlock = CreateHtmlElement.createElement({
      tag: "div",
      props: {
        className: this.cssObject.autoListDiv,
      },
    })

    filterContainer.append(filterBlock)
    filterContainer.append(this.autoBlock)
    this.displayList()

    return filterContainer
  }

  displayList() {
    this.autoBlock.innerHTML = ``
    for (const auto of this.newList) {
      let oneAuto = CreateHtmlElement.createElement({
        tag: "div",
        props: {
          className: this.cssObject.oneAuto,
          innerText: `${auto.brand} - ${auto.year} - ${auto.cost}`,
        },
      })
      this.autoBlock.append(oneAuto)
    }
  }

  render(targetElement) {
    let container = document.querySelector(targetElement)
    this.el.addEventListener("change", this.filterAuto.bind(this))
    container.append(this.el)
    let sel1 = document.getElementsByName("brand")
    for (const auto of this.autoList) {
      let option = document.createElement("option")
      option.textContent = auto.brand
      sel1[0].append(option)
    }
    let sel2 = document.getElementsByName("year")
    for (const auto of this.autoList) {
      let option = document.createElement("option")
      option.textContent = auto.year
      sel2[0].append(option)
    }
  }
}

let autoList = [
  {
    brand: `Mercedes`,
    year: `2018р.`,
    cost: `25000$`,
  },
  {
    brand: `Opel`,
    year: `2000р.`,
    cost: `5000$`,
  },
  {
    brand: `Opel`,
    year: `2004р.`,
    cost: `15000$`,
  },
  {
    brand: `Audi`,
    year: `2000р.`,
    cost: `7000$`,
  },
]
window.onload = function () {
  let auto = new AutoSelection(autoList)
  auto.render(`.container`)
}
