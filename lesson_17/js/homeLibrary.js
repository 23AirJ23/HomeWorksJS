import Book from "./books.js"
import Publisher from "./publisher.js"
import Author from "./author.js"

class HomeLibrary {
  constructor() {
    this.books = []
    this.sections = {
      Horrors: [],
      Novels: [],
      Poems: [],
      Fantasy: [],
    }
  }

  addBook(newbook) {
    let newAuthor = new Author(newbook.authorName, newbook.birthDate, newbook.shortText)
    let newPublisher = new Publisher(newbook.publisherName, newbook.registrationDate, newbook.foundationYear)
    let newBook = new Book(
      newAuthor,
      newbook.bookTitle,
      newbook.genre,
      newPublisher,
      newbook.availability,
      newbook.origin
    )
    this.books.push(newBook)
    for (const genre in this.sections) {
      if (newbook.genre === genre) {
        this.sections[genre].push(newBook)
      }
    }
  }

  removeBook(name) {
    for (let i = 0; i < this.books.length; i++) {
      if (name === this.books[i].title) {
        let genre = this.books[i].genre
        for (let i = 0; i < this.sections[genre].length; i++) {
          if (name === this.sections[genre][i].title) {
            this.sections[genre].splice(this.sections[genre][i], 1)
          }
        }
        this.books.splice(this.books[i], 1)
      }
    }
  }

  selectByname(name) {
    for (const book of this.books) {
      if (name === book.title) return book
    }
  }

  selectByAuthor(name) {
    let result = []
    for (const book of this.books) {
      if (book.author.name.includes(name)) {
        result.push(book)
      }
    }
    return result
  }

  selectByPublisher(name) {
    let result = []
    for (const book of this.books) {
      if (book.publisher.title.includes(name)) {
        result.push(book)
      }
    }
    return result
  }

  showResult(info) {
    if (Array.isArray(info)) {
      let list = ``
      for (let i = 0; i < info.length; i++) {
        list += `<b>Назва</b>: ${info[i].title} <b>Жанр</b>: ${info[i].genre} <b>Автор</b>: ${info[i].author.name} <b>Видавництво</b>: ${info[i].publisher.title} <b>В наявності</b>: ${info[i].availability}<br>`
      }
      return list
    } else {
      return `<b>Назва</b>: ${info.title} <b>Жанр</b>: ${info.genre} <b>Автор</b>: ${info.author.name} <b>Видавництво</b>: ${info.publisher.title} <b>В наявності</b>: ${info.availability}`
    }
  }
}

let book1 = {
  authorName: "Стівен Кінг",
  birthDate: "21 вересня 1947р.",
  shortText:
    "Американський письменник, автор більш ніж 200 творів, серед яких понад 50 бестселерів у стилях жахи, фентезі, трилер, містика.",
  bookTitle: "Керрі",
  genre: "Novels",
  publisherName: 'Книжковий клуб "Клуб Сімейного Дозвілля"',
  registrationDate: 2001,
  foundationYear: 2001,
  availability: "Так",
  origin: "bought",
}
let book2 = {
  authorName: "Стівен Кінг",
  birthDate: "21 вересня 1947р.",
  shortText:
    "Американський письменник, автор більш ніж 200 творів, серед яких понад 50 бестселерів у стилях жахи, фентезі, трилер, містика.",
  bookTitle: "Сяйво",
  genre: "Horrors",
  publisherName: 'Книжковий клуб "Клуб Сімейного Дозвілля"',
  registrationDate: 2001,
  foundationYear: 2001,
  availability: "Так",
  origin: "bought",
}
let book3 = {
  authorName: "Едгар Алан По",
  birthDate: "19 січня 1809р.",
  shortText:
    "Американський письменник, поет, есеїст, драматург, літературний редактор і критик, один із провідних представників американського романтизму.",
  bookTitle: "Ворон",
  genre: "Poems",
  publisherName: "Фоліо",
  registrationDate: 2016,
  foundationYear: 2016,
  availability: "Так",
  origin: "bought",
}
let book4 = {
  authorName: "Вільям Блетті",
  birthDate: "7 січня 1928р.",
  shortText: 'Американський письменник. Автор роману "Той, що виганяє диявола"',
  bookTitle: "Той, що виганяє диявола",
  genre: "Horrors",
  publisherName: "Фоліо",
  registrationDate: 2016,
  foundationYear: 2016,
  availability: "Так",
  origin: "bought",
}
let book5 = {
  authorName: "Ребекка Ф. Кван",
  birthDate: "29 травня 1996р.",
  shortText: "Американська письменниця китайського походження.",
  bookTitle: "Полум'яний бог",
  genre: "Fantasy",
  publisherName: "Жорж",
  registrationDate: 2010,
  foundationYear: 2010,
  availability: "Так",
  origin: "bought",
}
let myLibrary = new HomeLibrary()
myLibrary.addBook(book1)
myLibrary.addBook(book2)
myLibrary.addBook(book3)
myLibrary.addBook(book4)
myLibrary.addBook(book5)
console.log(myLibrary)
let selectByname = myLibrary.selectByname("Сяйво")
console.log(selectByname)
let selectByAuthor = myLibrary.selectByAuthor("Кінг")
console.log(selectByAuthor)
let selectByPublisher = myLibrary.selectByPublisher("Книжковий клуб")
console.log(selectByPublisher)
//myLibrary.removeBook("Сяйво")
//console.log(myLibrary)
h1.insertAdjacentHTML(
  "afterend",
  `<div id="byName" style="margin-bottom: 10px;"><b>Вибір за назвою</b><br>${myLibrary.showResult(
    selectByname
  )}</div><br>`
)
byName.insertAdjacentHTML(
  "afterend",
  `<div id="byAuthor" style="margin-bottom: 10px;"><b>Вибір за автором</b><br>${myLibrary.showResult(
    selectByAuthor
  )}</div><br>`
)
byAuthor.insertAdjacentHTML(
  "afterend",
  `<div id="byPublisher"><b>Вибір за видавництвом</b><br>${myLibrary.showResult(selectByPublisher)}</div>`
)
