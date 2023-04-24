class Translater {
  constructor(words, cssObject) {
    this.words = words
    this.cssObject = {
      wordsContainer: `words-div`,
      oneWordContainer: `word-button`,
      ...(cssObject ?? {}),
    }
  }

  createWordsList(lang) {
    let wordsDiv = document.createElement(`div`)
    wordsDiv.className = this.cssObject.wordsContainer
    wordsDiv.id = `${lang}-side`
    for (const pair of this.words) {
      this.wordBtn = document.createElement(`button`)
      this.wordBtn.className = this.cssObject.oneWordContainer
      this.wordBtn.classList.add(`_${lang}`)
      this.wordBtn.setAttribute(`value`, `${pair.id}`)
      this.wordBtn.innerText = `${pair[lang]}`
      this.wordBtn.onclick = this.choosePair.bind(this, lang, this.wordBtn)
      wordsDiv.append(this.wordBtn)
    }
    return wordsDiv
  }

  mixWords() {
    for (let i = this.words.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1))
      ;[this.words[i], this.words[j]] = [this.words[j], this.words[i]]
    }
  }

  blockButtons(btn) {
    let enButtons = document.querySelectorAll(`._en`)
    let uaButtons = document.querySelectorAll(`._ua`)
    if (btn.closest(`#en-side`)) {
      enButtons.forEach(el => {
        el.setAttribute(`disabled`, `true`)
      })
      btn.classList.add(`_active`)
      btn.removeAttribute(`disabled`)
    }
    if (btn.closest(`#ua-side`)) {
      uaButtons.forEach(el => {
        el.setAttribute(`disabled`, `true`)
      })
      btn.classList.add(`_active`)
      btn.removeAttribute(`disabled`)
    }
  }
  choosePair(lang, btn) {
    this.blockButtons(btn)
    if (lang === `en`) {
      this.value1 = btn.value
      this.btn1 = btn
    }
    if (lang === `ua`) {
      this.value2 = btn.value
      this.btn2 = btn
    }
    if (this.value1 >= 0 && this.value2 >= 0) {
      if (this.value1 === this.value2) {
        this.btn1.classList.add(`_right-answer`)
        this.btn2.classList.add(`_right-answer`)
        setTimeout(() => {
          let ind = this.words.findIndex(el => el.id == this.value1)
          this.words.splice(ind, 1)
          this.value1 = -Infinity
          this.value2 = -Infinity
          this.translaterContainer.innerHTML = ``
          this.render(`.translater`)
        }, 2000)
      } else {
        this.btn1.classList.add(`_wrong-answer`)
        this.btn2.classList.add(`_wrong-answer`)
        setTimeout(() => {
          this.value1 = -Infinity
          this.value2 = -Infinity
          this.translaterContainer.innerHTML = ``
          this.render(`.translater`)
        }, 2000)
      }
    }
  }

  render(container) {
    this.translaterContainer = document.querySelector(container)
    let text = document.createElement(`p`)
    text.innerText = `Знайдіть пари слів`
    this.translaterContainer.append(text)
    let enWords = this.createWordsList(`en`)
    this.mixWords()
    let uaWords = this.createWordsList(`ua`)
    this.translaterContainer.append(enWords)
    this.translaterContainer.append(uaWords)
  }
}

let words = [
  {id: 0, en: `table`, ua: `стіл`},
  {id: 1, en: `oblivious`, ua: `забудькуватий`},
  {id: 2, en: `obvious`, ua: `очевидний`},
  {id: 3, en: `flabbergasted`, ua: `шокований `},
  {id: 4, en: `sustainable`, ua: `сталий`},
  {id: 5, en: `quaint`, ua: `старовинний`},
  {id: 6, en: `superfluous`, ua: `непотрібний`},
]

window.onload = function () {
  let translator = new Translater(words)
  translator.render(`.translater`)
}
