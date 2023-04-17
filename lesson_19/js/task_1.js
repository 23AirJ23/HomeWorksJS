class Article {
  constructor({img, text, price, sticker}) {
    this.image = img
    this.text = text
    this.price = price
    this.sticker = sticker
  }
  render() {
    let container = document.querySelector(".container")
    let div = document.createElement("div")
    div.className = `item`
    let sticker = document.createElement(`div`)
    sticker.className = `sticker`
    sticker.textContent = this.sticker
    if (this.sticker === `Акція`) sticker.classList.add(`sticker_red`)
    else sticker.classList.add(`sticker_orange`)
    let img = document.createElement("img")
    img.className = "item__image"
    img.src = this.image
    let text = document.createElement("div")
    text.className = `text`
    text.textContent = this.text
    let price = document.createElement("div")
    price.className = `item__price`
    price.textContent = this.price
    container.append(div)
    div.append(sticker)
    div.append(img)
    div.append(text)
    div.append(price)
  }
}
window.onload = function () {
  for (let i = 0; i < articleList.length; i++) {
    let article = new Article(articleList[i])
    article.render()
  }
}

let articleList = [
  {
    img: `./img/1.jpg`,
    text: `Xiaomi RedmiBook 15`,
    price: `15999₴`,
    sticker: `Топ продаж`,
  },
  {
    img: `./img/2.jpg`,
    text: `Ноутбук ASUS Laptop X515EA-BQ1461 Slate Grey`,
    price: `18599₴`,
    sticker: `Топ продаж`,
  },
  {
    img: `./img/3.jpg`,
    text: `Ноутбук Apple MacBook Air M1 Chip Gold`,
    price: `40100₴`,
    sticker: `Акція`,
  },
  {
    img: `./img/4.jpg`,
    text: `Ноутбук Lenovo IdeaPad 1 15IJL7 Cloud Grey `,
    price: `36999₴`,
    sticker: `Топ продаж`,
  },
]
