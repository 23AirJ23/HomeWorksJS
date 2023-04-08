class CompanyCar {
  static carObj
  constructor(driver, brand, number) {
    if (CompanyCar.carObj) return CompanyCar.carObj

    this.driver = driver
    this.brand = brand
    this.autoNumber = number

    CompanyCar.carObj = this
  }

  toString() {
    return `Водій: ${this.driver}<br>Марка: ${this.brand}<br>Номер: ${this.autoNumber}<br>`
  }
}
let auto = new CompanyCar("Ivan", "Audi", "KP3456OH")
document.write(auto)
let auto2 = new CompanyCar("Olga", "BMW", "KI3856OP")
document.write(auto2)
