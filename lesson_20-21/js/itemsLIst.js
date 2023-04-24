import CreateItem from "./createProductItem.js"
import CreateHtmlElement from "./createHtmlTag.js"

class ItemList {
  constructor(info) {
    this.info = info
    this.totalS = 0
    this.el = this.createElement()
  }
  delItem(event) {
    let itemId = event.detail.itemId
    let item = document.getElementById(itemId)
    item.remove()
    let summ = event.detail.summ
    let summNum = Number(summ.innerHTML)
    let totalNum = Number(this.totalSpan.innerText)
    this.totalSpan.innerText = totalNum - summNum
  }
  minusElement(event) {
    let quantity = event.detail.quantity
    let currentButton = event.detail.minBtn
    if (quantity.innerHTML >= 2) {
      quantity.innerHTML--
    } else currentButton.setAttribute("disabled", "true")
    let summ = event.detail.summ
    let summNum = Number(summ.innerHTML)
    let price = event.detail.price
    if (summNum > price) {
      summ.innerHTML = summNum - price
      let totalNum = Number(this.totalSpan.innerText)
      this.totalSpan.innerText = totalNum - price
    }
  }
  plusElement(event) {
    let quantity = event.detail.quantity
    quantity.innerHTML++
    let minbtn = event.detail.minBtn
    minbtn.removeAttribute("disabled")
    let summ = event.detail.summ
    let summNum = Number(summ.innerHTML)
    let price = event.detail.price
    summ.innerHTML = summNum + price
    let totalNum = Number(this.totalSpan.innerText)
    this.totalSpan.innerText = totalNum + price
  }
  displayList() {
    this.itemsContainer.innerHTML = ``
    for (const item of this.info) {
      let newItem = new CreateItem(item)
      newItem.el.addEventListener("del", this.delItem.bind(this))
      newItem.el.addEventListener("minus", this.minusElement.bind(this))
      newItem.el.addEventListener("plus", this.plusElement.bind(this))
      this.itemsContainer.append(newItem.el)
    }
    for (const item of this.info) {
      this.totalS += item.price
    }
    this.totalSumm = CreateHtmlElement.createElement({
      tag: "div",
      props: {
        className: "total-summ",
        innerText: `Загалом до оплати:`,
      },
    })
    this.totalSpan = document.createElement("span")
    this.totalSpan.append(this.totalS)
    this.totalSumm.append(this.totalSpan)
    this.itemsContainer.append(this.totalSumm)
  }

  createElement() {
    this.itemsContainer = CreateHtmlElement.createElement({
      tag: "div",
      props: {
        className: "items-container",
      },
    })
    this.displayList()
    return this.itemsContainer
  }

  render(targetElement) {
    let container = document.querySelector(targetElement)
    container.append(this.el)
  }
}

window.onload = function () {
  let list = new ItemList(info)
  list.render(".container")
}
let info = [
  {
    src: "./img/tv.jpg",
    title: "Xiaomi Mi TV P1 32",
    price: 14000,
    id: 1,
  },
  {
    src: "./img/mouse.jpg",
    title: "Apple Magic Mouse Bluetooth",
    price: 3500,
    id: 2,
  },
  {
    src: "./img/cover.jpg",
    title: "Килимок для миші Фортнайт",
    price: 500,
    id: 3,
  },
]
