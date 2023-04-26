export default class Client {
  constructor(id, name, moneyOnAccaunt) {
    this.id = id
    this.name = name
    this.moneyOnAccaunt = moneyOnAccaunt
  }

  additionMoney(summ) {
    this.moneyOnAccaunt += summ
  }
  withdrawalMoney(summ) {
    this.moneyOnAccaunt -= summ
  }
  toString() {
    return `Клієнт: ${this.name}; Залишок на рахунку: ${this.moneyOnAccaunt}`
  }
}
