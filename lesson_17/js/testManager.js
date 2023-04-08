import MultChecker from "./multChecker.js"
import AddChecker from "./addChecker.js"
import TestData from "./testData.js"
import History from "./history.js"

class TestManager {
  static numObj
  constructor(numOerations) {
    if (TestManager.numObj) return TestManager.numObj
    this.num = numOerations
    TestManager.numObj = this
  }

  getRandomNum() {
    return Math.floor(Math.random() * 2) + 1
  }

  userPoll() {
    let list = []
    while (this.num > 0) {
      let randomNum = this.getRandomNum()
      if (randomNum === 1) {
        let multChecker = new MultChecker()
        let temp = multChecker.testUser()
        list.push(new TestData(temp))
        this.num--
      }
      if (randomNum === 2) {
        let addChecker = new AddChecker(1, 50)
        let temp = addChecker.testUser()
        list.push(new TestData(temp))
        this.num--
      }
    }
    return new History(list)
  }
}

let testManager = new TestManager(10)
let temp = testManager.userPoll()
h1.insertAdjacentHTML("afterend", temp)
