class NotANumber extends Error {
  constructor() {
    super()
    this.message = "Не є числом"
    this.name = "NotANumber"
  }
}
class IsDiapason extends Error {
  constructor() {
    super()
    this.message = `Не в межах діапазону`
    this.name = "IsDiapason"
  }
}
class IsHoliday extends Error {
  constructor() {
    super()
    this.message = "Місяць канікулів"
    this.name = "IsHoliday"
  }
}

class Student {
  constructor() {
    this.month = this.whatMonth()
    this.rating = this.whatrating()
  }

  whatMonth() {
    let month = parseInt(prompt(`Введіть місяць:`))
    try {
      if (isNaN(month)) throw new NotANumber()
      if (month > 12) throw new IsDiapason()
      if (month === 6 || month === 7 || month === 8) throw new IsHoliday()
    } catch (err) {
      if (err instanceof NotANumber) {
        alert(err.message)
        this.whatMonth()
      } else if (err instanceof IsDiapason) {
        alert(err.message)
        this.whatMonth()
      } else if (err instanceof IsHoliday) {
        alert(err.message)
        this.whatMonth()
      }
    }
    return month
  }

  whatrating() {
    let rating = parseInt(prompt(`Введіть оцінку:`))
    try {
      if (isNaN(rating)) throw new NotANumber()
      if (rating < 1 && rating > 100) throw new IsDiapason()
    } catch (err) {
      if (err instanceof NotANumber) {
        alert(err.message)
        this.whatrating()
      }
      if (err instanceof IsDiapason) {
        alert(err.message)
        this.whatrating()
      }
    }
    return rating
  }

  verdict() {
    if (this.month !== 5 && this.rating > 80) alert(`Зможе виправити`)
    else alert(`Не зможе виправити`)
  }
}

window.onload = function () {
  let student = new Student()
  student.verdict()
}
