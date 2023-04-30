let arrWithRows = ["Hello", "33 years", "FGHT", "AOUE", "365757", "1 percent"]
let someString =
  "45 Це звичайний 4142-3433-2323-3434 рядок 12. В ньому може бути 2459 слів, а може 4642-3833-6723-3634 й 9753безпробілу. А також дата 23.05.2045"
let govermentUrl = "https://goverment.gov"
let someyears = "2021 1987 2030 2045 3756 1548"
let number = "+3809784586572"

// Завдання 1 ------------------------------------------
function arrayIsNumbers() {
  let container = document.querySelector(".arrayisnumbers")
  for (const row of arrWithRows) {
    if (/\d/.test(row)) {
      let div = document.createElement("div")
      div.innerText = row
      container.append(div)
    }
  }
}

// Завдання 2 ------------------------------------------
function arrayNotNumber() {
  let container = document.querySelector(".arraynotnumber")
  for (const row of arrWithRows) {
    if (/^[a-zA-Z]+$/.test(row)) {
      let div = document.createElement("div")
      div.innerText = row
      container.append(div)
    }
  }
}

// Завдання 3 ------------------------------------------
function onlyVowels() {
  let container = document.querySelector(".onlyvowels")
  for (const row of arrWithRows) {
    if (/^[aeiouy]+$/i.test(row)) {
      let div = document.createElement("div")
      div.innerText = row
      container.append(div)
    }
  }
}

// Завдання 4 ------------------------------------------
function consonants() {
  let container = document.querySelector(".consonants")
  for (const row of arrWithRows) {
    if (/^[qwrtplkjhgfdszxcvbnm]+$/i.test(row)) {
      let div = document.createElement("div")
      div.innerText = row
      container.append(div)
    }
  }
}

// Завдання 5 ------------------------------------------
function oneOrThree() {
  let container = document.querySelector(".oneorthree")
  for (const row of arrWithRows) {
    if (/[13]/.test(row)) {
      let div = document.createElement("div")
      div.innerText = row
      container.append(div)
    }
  }
}

// Завдання 6 ------------------------------------------
function stringOnlyNumbers() {
  let container = document.querySelector(".stringonlynumbers")
  let num = someString.match(/\d/g)
  container.innerHTML = `Лише числа з рядка: ${num}`
}

// Завдання 7 ------------------------------------------
function punctuationMarks() {
  let container = document.querySelector(".punctuationmarks")
  for (const word of someString) {
    if (/[.,]/.test(word)) {
      let div = document.createElement("div")
      div.innerText = word
      container.append(div)
    }
  }
}

// Завдання 8 ------------------------------------------
function separatedByPunctuation() {
  let container = document.querySelector(".separated-by-punctuation")
  let sep = someString.match(/[а-їґ]*[.,]\s[а-їґ]*/gi)
  container.innerHTML = `Розділені розділовими знаками: ${sep}`
}

// Завдання 9 ------------------------------------------
function dayMonthYear() {
  let container = document.querySelector(".day-month-year")
  let dmy = someString.match(/\d{2}.\d{2}.\d{4}/g)
  container.innerHTML = `Дата: ${dmy}`
}

// Завдання 10 ------------------------------------------
function twoDigitNumbers() {
  let container = document.querySelector(".two-digit-numbers")
  let twoDigit = someString.match(/\b\d{2}\b/g)
  container.innerHTML = `Кількість двоцифрових чисел: ${twoDigit.length}`
}

// Завдання 11 ------------------------------------------
function creditCard() {
  let container = document.querySelector(".credit-card")
  let credit = someString.match(/\d{4}-\d{4}-\d{4}-\d{4}/g)
  container.innerHTML = `Номери кредитних карток: ${credit}`
}

// Завдання 12 ------------------------------------------
function govermentSite() {
  let container = document.querySelector(".goverment-site")
  if (/\bgov$/g.test(govermentUrl)) {
    container.innerHTML = `Урядовий`
  } else container.innerHTML = `Не урядовий`
}

// Завдання 13 ------------------------------------------
function years() {
  let container = document.querySelector(".years")
  let str = someyears.match(/\b\d{4}\b/g)
  for (const year of str) {
    if (year > 2021) {
      let div = document.createElement("div")
      div.innerText = year
      container.append(div)
    }
  }
}

// Завдання 14 ------------------------------------------
function ukraineNum() {
  let container = document.querySelector(".ukrainenumber")
  if (/\+38/g.test(number)) {
    container.innerHTML = `Український`
  } else container.innerHTML = `Не наш`
}

// Завдання 15 ------------------------------------------
function userName() {
  let container = document.querySelector(".username")
  let name = prompt(`Введіть прізвище та ім'я через пробіл`)
  name = name.replace(" ", "-")
  container.innerHTML = `Ім'я через дефіс: ${name}`
}

// Завдання 16 ------------------------------------------
function stringDate() {
  let container = document.querySelector(".stringdate")
  let userDate = prompt(`Введіть дату у форматі dd.mm.year`)
  userDate = userDate.replaceAll(".", "/")
  container.innerHTML = `Дата у новому форматі: ${userDate}`
}

// Завдання 17 ------------------------------------------
function holidayOrNot() {
  let container = document.querySelector(".holidayornot")
  let usdrDay = prompt(`Введіть день тижня у форматі номеру дня (0-6) або sun,mon,tue,wed,thu,fri,sat`)
  if (/[06]/.test(usdrDay) || /s\w{2}/.test(usdrDay)) container.innerHTML = `Вихідний день`
  else container.innerHTML = `Робочий день`
}

window.onload = function () {
  arrayIsNumbers()
  arrayNotNumber()
  onlyVowels()
  consonants()
  oneOrThree()
  stringOnlyNumbers()
  punctuationMarks()
  // separatedByPunctuation()
  // dayMonthYear()
  // twoDigitNumbers()
  // creditCard()
  // govermentSite()
  // years()
  // ukraineNum()
  // userName()
  // stringDate()
  // holidayOrNot()
}
