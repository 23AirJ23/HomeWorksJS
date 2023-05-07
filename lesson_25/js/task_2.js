class Product {
  constructor(title, price, quantity) {
    this.title = title
    this.price = price
    this.quantity = quantity
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "string":
        return `${this.title}: ${this.price * this.quantity}`
    }
  }
}

class Shop {
  constructor(products) {
    this.products = products
  }

  [Symbol.iterator]() {
    this.currentIndex = 0
    return this
  }

  next() {
    if (this.currentIndex < this.products.length) {
      let currentProduct = this.products[this.currentIndex]
      this.currentIndex++
      return {done: false, value: String(currentProduct)}
    } else return {done: true}
  }
}

const productsList = [
  new Product("Картопля", 70, 150),
  new Product("Морква", 20, 250),
  new Product("Капуста", 35, 40),
  new Product("Цибуля", 15, 140),
]

window.onload = function () {
  let shop = new Shop(productsList)
  for (const product of shop) {
    console.log(product)
  }
}
