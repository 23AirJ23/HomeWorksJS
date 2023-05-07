class PhoneNumber {
  constructor(number) {
    this.number = number
    this.operator = this.whatOperator()
  }

  whatOperator() {
    if (/050/.test(this.number)) {
      return `Водафон`
    } else return `Київстар`
  }

  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "string":
        return this.operator
    }
  }
}

window.onload = function () {
  let num = new PhoneNumber(`0503456778`)
  alert(num)
}
