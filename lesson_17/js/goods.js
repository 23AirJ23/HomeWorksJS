export default class Goods {
  #name
  #unit
  #quantity
  constructor(name, unit, quantity, company) {
    this.Name = name
    this.Unit = unit
    this.Quantity = quantity
    this.company = company
  }
  get Name() {
    return this.#name
  }
  set Name(name) {
    if (!name) throw new Error(`Wrong name`)
    this.#name = name
  }
  get Unit() {
    return this.#unit
  }
  set Unit(unit) {
    if (!unit) throw new Error(`Wrong name`)
    this.#unit = unit
  }
  get Quantity() {
    return this.#quantity
  }
  set Quantity(quantity) {
    if (!quantity) throw new Error(`Wrong name`)
    this.#quantity = quantity
  }
  toString() {
    return `Назва товару: ${this.Name} / Кількість: ${this.Quantity}${this.Unit}. / Виробник: ${this.company.name}`
  }
}
