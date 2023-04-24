import CreateHtmlElement from "./createHtmlTag.js"

export default class CreateItem {
  constructor({src, title, price, id}) {
    this.src = src
    this.title = title
    this.price = price
    this.summ = this.price
    this.quantity = 1
    this.id = id
    this.el = this.createElement()
  }

  minusItem() {
    let minusItem = new CustomEvent(`minus`, {
      detail: {
        price: this.price,
        quantity: this.quantitySpan,
        minBtn: this.buttonMinus,
        summ: this.summSpan,
      },
    })
    this.el.dispatchEvent(minusItem)
  }
  plusItem() {
    let plusItem = new CustomEvent(`plus`, {
      detail: {
        price: this.price,
        quantity: this.quantitySpan,
        minBtn: this.buttonMinus,
        summ: this.summSpan,
      },
    })
    this.el.dispatchEvent(plusItem)
  }
  delItem() {
    let delItem = new CustomEvent(`del`, {
      detail: {
        itemId: this.id,
        summ: this.summSpan,
      },
    })
    this.el.dispatchEvent(delItem)
  }

  createElement() {
    let container = CreateHtmlElement.createElement({
      tag: "div",
      props: {
        className: "item-container",
        id: this.id,
      },
    })

    let imgContainer = CreateHtmlElement.createElement({
      tag: "div",
      props: {
        className: "img-container",
      },
    })

    let img = CreateHtmlElement.createElement({
      tag: "img",
      props: {
        src: this.src,
      },
    })

    imgContainer.append(img)
    container.append(imgContainer)

    let title = CreateHtmlElement.createElement({
      tag: "span",
      props: {
        className: `product-title`,
        innerText: this.title,
      },
    })
    container.append(title)

    this.buttonMinus = CreateHtmlElement.createElement({
      tag: "button",
      props: {
        className: "product-button",
        innerText: "-",
      },
      attrs: {
        disabled: "true",
      },
      events: {
        click: this.minusItem.bind(this),
      },
    })
    container.append(this.buttonMinus)

    this.quantitySpan = CreateHtmlElement.createElement({
      tag: "span",
      props: {
        className: "quantity-span",
        innerText: this.quantity,
      },
    })
    container.append(this.quantitySpan)

    this.buttonPlus = CreateHtmlElement.createElement({
      tag: "button",
      props: {
        className: "product-button",
        innerText: "+",
      },
      events: {
        click: this.plusItem.bind(this),
      },
    })
    container.append(this.buttonPlus)

    let summcontainer = CreateHtmlElement.createElement({
      tag: "div",
      props: {
        className: "pay-container",
      },
    })
    this.summSpan = CreateHtmlElement.createElement({
      tag: "span",
      props: {
        innerText: this.summ,
      },
    })
    summcontainer.innerText = "До оплати:"
    summcontainer.append(this.summSpan)

    container.append(summcontainer)

    let buttonDelete = CreateHtmlElement.createElement({
      tag: "button",
      props: {
        className: "product-button product-button--del",
        innerText: "X",
      },
      events: {
        click: this.delItem.bind(this),
      },
    })
    container.append(buttonDelete)
    return container
  }
}
