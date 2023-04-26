import Client from "./1_Client.js"
import GoldenCLient from "./1_GoldenClient.js"

class Bank {
  constructor(clients) {
    this.clients = clients
  }

  showClients(targetContainer, id) {
    let container = document.querySelector(targetContainer)
    for (const client of this.clients) {
      if (client.id === id) {
        let div = document.createElement("div")
        let string = client.toString()
        div.innerText = string
        container.append(div)
      }
    }
  }

  showMoney(targetContainer) {
    let container = document.querySelector(targetContainer)
    let summ = this.clients.reduce((prev, el) => {
      return prev + el.moneyOnAccaunt
    }, 0)
    container.append(summ)
  }
}

let clients = [
  new Client("usual", "Іван Сергійович Приходько", 10000),
  new Client("usual", "Марина Олексіївна Боднарь", 25000),
  new GoldenCLient("gold", "Андрій Юрійович Костинюк", 659786, 1000000, 10),
  new Client("usual", "Олеся Іванівна Заець", 1000),
  new GoldenCLient("gold", "Томас Робертович Бойко", 349000, 500000, 10),
]

window.onload = function () {
  let bank = new Bank(clients)
  bank.showClients(".usual", "usual")
  bank.showClients(".gold", "gold")
  bank.showMoney(".money")
}
