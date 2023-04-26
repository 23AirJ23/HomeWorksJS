import CreateHtmlElement from "./createHtmlTag.js"

export default class AddFilterForm {
  constructor(cssObject) {
    this.cssObject = {
      filterContainer: "filter-container",
      filterDiv: `filter-div`,
      selectBox: `select-box`,
      oneAuto: `one-auto`,
      option: `option`,
      ...(cssObject ?? {}),
    }
    this.el = this.createForm()
  }

  createForm() {
    let filterContainer = document.createElement("div")
    let filterLabel = CreateHtmlElement.createElement({
      tag: "span",
      props: {
        textContent: "Фільтри пошуку",
      },
    })
    let filtersCont = CreateHtmlElement.createElement({
      tag: "div",
      props: {
        className: this.cssObject.filterContainer,
      },
    })

    let firstSelBox = CreateHtmlElement.createElement({
      tag: "div",
      props: {
        className: "select-box",
      },
    })
    let label1 = CreateHtmlElement.createElement({
      tag: "label",
      props: {
        innerText: "Марка",
      },
    })
    this.sel1 = CreateHtmlElement.createElement({
      tag: "select",
      props: {
        name: "brand",
        id: "auto",
      },
    })
    firstSelBox.append(label1)
    firstSelBox.append(this.sel1)

    let secondSelBox = CreateHtmlElement.createElement({
      tag: "div",
      props: {
        className: "select-box",
      },
    })
    let label2 = CreateHtmlElement.createElement({
      tag: "label",
      props: {
        innerText: "Рік випуску",
      },
    })

    this.sel2 = CreateHtmlElement.createElement({
      tag: "select",
      props: {
        name: "year",
        id: "year",
      },
    })

    let nullAutoOption = CreateHtmlElement.createElement({
      tag: "option",
      props: {
        innerText: "Вибір марки",
      },
      attrs: {
        selected: "true",
        disabled: "true",
      },
    })
    let nullYearOption = CreateHtmlElement.createElement({
      tag: "option",
      props: {
        innerText: "Рік авто",
      },
      attrs: {
        selected: "true",
        disabled: "true",
      },
    })

    secondSelBox.append(label2)
    secondSelBox.append(this.sel2)
    this.sel1.append(nullAutoOption)
    this.sel2.append(nullYearOption)

    filterContainer.append(filterLabel)
    filterContainer.append(filtersCont)
    filtersCont.append(firstSelBox)
    filtersCont.append(secondSelBox)

    return filterContainer
  }
}
