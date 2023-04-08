import Company from "./manufacturerCompany.js"
import Goods from "./goods.js"

class Storage {
  constructor() {
    this.goods = [
      new Goods("Mi 11", "од", 1560, new Company("Xiaomi", 235670)),
      new Goods("Iphone 14", "од", 10060, new Company("Apple", 38302)),
      new Goods("Galaxy Note 10", "од", 12560, new Company("Samsung", 84206)),
      new Goods("Huawei t10", "од", 4870, new Company("Huawei", 27649)),
      new Goods("Odyssey", "од", 760, new Company("LG", 964347)),
      new Goods("Tab 10", "од", 15960, new Company("Samsung", 84206)),
    ]
  }

  productRegistration(someGoods) {
    this.goods.push(
      new Goods(
        someGoods.name,
        someGoods.unit,
        someGoods.quantity,
        new Company(someGoods.company.name, someGoods.company.registrationNumber)
      )
    )
  }

  shipment(name, quantity) {
    for (const good of this.goods) {
      if (name === good.Name && quantity <= good.Quantity) {
        good.Quantity -= quantity
        return `Було відвантажено ${name}, у кількості ${quantity}${good.Unit}.`
      }
      if (name === good.Name && quantity > good.Quantity) {
        return `В наявності немає такої кількості.`
      }
    }
    return `Такого товару не існує у базі.`
  }

  filterByName(name) {
    for (const good of this.goods) {
      if (name === good.Name) return good
    }
    return `Такого товару не існує у базі.`
  }

  filterByCompany(name) {
    let goodArr = []
    for (const good of this.goods) {
      if (name === good.company.name) goodArr.push(good)
    }
    if (goodArr.length > 0) return goodArr
    return `Такого виробника не існує у базі.`
  }

  toString() {
    let result = ``
    for (const good of this.goods) {
      result += `${good}<br>`
    }
    return result
  }
}

let storage = new Storage()
storage.productRegistration({
  name: "Air Jordan",
  unit: "од.",
  quantity: 5640,
  company: {
    name: "Nike",
    registrationNumber: 496453,
  },
})
let shipment = storage.shipment("Iphone 14", 20)
let filterByName = storage.filterByName("Iphone 14")
let filterByCompany = storage.filterByCompany("Samsung")
h1.insertAdjacentHTML(
  "afterend",
  `<div id="div">${storage}</div><br><div>${shipment}</div><br><div>${filterByName}</div><br><div>${filterByCompany}</div>`
)
