let pupilAges = [12, 9, 18, 5, 12, 9, 11, 5, 7]
let bookList = [
  {
    title: "book",
    year: 2017,
    author: "Іван",
  },
  {
    title: "book2",
    year: 2018,
    author: "Петро",
  },
  {
    title: "book3",
    year: 2011,
    author: "Василь",
  },
  {
    title: "book4",
    year: 2010,
    author: "Василь",
  },
  {
    title: "book5",
    year: 2000,
    author: "Іван",
  },
]
let siteUsers = [
  {
    name: "Ivan",
    login: 2304,
  },
  {
    name: "Vasyl",
    login: 2306,
  },
  {
    name: "Petro",
    login: 2708,
  },
  {
    name: "Ivan",
    login: 2304,
  },
  {
    name: "Vasyl",
    login: 2306,
  },
]
let studentsList = [
  {
    name: "Ivan",
    course: "economy",
    faculty: 1,
  },
  {
    name: "Petro",
    course: "marketing",
    faculty: 2,
  },
  {
    name: "Olga",
    course: "marketing",
    faculty: 3,
  },
  {
    name: "Ivanka",
    course: "economy",
    faculty: 1,
  },
  {
    name: "Andrew",
    course: "it",
    faculty: 2,
  },
]
let temperaturesList = [12.4, 24.9, 10.6, 12.4, 24.9, 12.4, 10.6, 11.9]

let mathGroup = ["Ivan Petrov", "Petro Ivanov", "Olga Sumska", "Oksana Bayrak", "Andrew Kostunyuk"]
let historyGroup = ["Peter Parker", "Olga Sumska", "Mark Ostapenko", "Andrew Kostunyuk"]
// Завдання 1 ------------------------------------------
function pupilsAge() {
  let map = new Map()
  let max = 0
  for (const age of pupilAges) {
    let count = map.get(age) || 0
    map.set(age, count + 1)
  }
  map.forEach((element, key) => {
    if (key > max) max = key
  })
  console.log(`Завдання 1`)
  console.log(`Кількість cхожих значень:`)
  console.log(map)
  console.log(`Максимальний вік: ${max}`)
}

// Завдання 2 ------------------------------------------
function books() {
  let map = new Map()
  for (const book of bookList) {
    let count = map.get(book.author) || 0
    map.set(book.author, count + 1)
  }
  console.log(`Завдання 2`)
  console.log(`Кількість книг для кожного автора:`)
  console.log(map)
}

// Завдання 3 ------------------------------------------
function siteStatistic() {
  let map = new Map()
  for (const user of siteUsers) {
    let count = map.get(user.login) || 0
    map.set(user.login, count + 1)
  }
  console.log(`Завдання 3`)
  console.log(`Кількість відвідувань:`)
  console.log(map)
}

// Завдання 4 ------------------------------------------
function students() {
  let set = new Set()
  let map = new Map()
  for (const student of studentsList) {
    let count = map.get(student.course) || 0
    map.set(student.course, count + 1)
    set.add(student.faculty)
  }
  console.log(`Завдання 4`)
  console.log(`Кількість студентів кожного з курсів:`)
  console.log(map)
  console.log(`Кількість різних факультетів: ${set.size}`)
}

// Завдання 5 ------------------------------------------
function temperatures() {
  let map = new Map()
  let set = new Set()
  for (const temp of temperaturesList) {
    let count = map.get(temp) || 0
    map.set(temp, count + 1)
    set.add(Math.ceil(temp))
  }
  console.log(`Завдання 5`)
  console.log(`Кількість входжень температур:`)
  console.log(map)
  console.log(`Кількість різних показів: ${set.size}`)
}

// Завдання 6 ------------------------------------------
function courses() {
  let map = new Map()
  for (const student of mathGroup) {
    let count = map.get(student) || 0
    map.set(student, count + 1)
  }
  for (const student of historyGroup) {
    let count = map.get(student) || 0
    map.set(student, count + 1)
  }
  let atLeastOne = 0
  let twoCourses = 0
  map.forEach((value, key) => {
    if (value === 2) twoCourses++
    atLeastOne++
  })

  console.log(`Завдання 6`)
  console.log(`Відвідують обидва курси: ${twoCourses}`)
  console.log(`Хоча б один: ${atLeastOne}`)
}

window.onload = function () {
  pupilsAge()
  books()
  siteStatistic()
  students()
  temperatures()
  courses()
}
