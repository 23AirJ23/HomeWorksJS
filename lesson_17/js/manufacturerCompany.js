export default class Company {
  #registrationNumber
  constructor(name, registrationNumber) {
    this.name = name
    this.RegistrationNumber = registrationNumber
  }

  get RegistrationNumber() {
    return this.#registrationNumber
  }
  set RegistrationNumber(number) {
    if (!number) throw new Error(`Wrong number`)
    this.#registrationNumber = number
  }
}
