import Client from "./1_Client.js"

export default class GoldenCLient extends Client {
  constructor(id, name, moneyOnAccaunt, creditLimit, rateForCreditFunds) {
    super(id, name, moneyOnAccaunt)
    this.creditLimit = creditLimit
    this.rateForCreditFunds = rateForCreditFunds
  }

  definitionOfPenalty() {
    return this.rateForCreditFunds * 2
  }
}
