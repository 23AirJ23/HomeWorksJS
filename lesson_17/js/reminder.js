class Reminder {
  static reminderObj
  static interval
  static message
  static someInterval
  constructor(interval, message) {
    if (Reminder.reminderObj) return Reminder.reminderObj
    Reminder.interval = interval
    Reminder.message = message
    Reminder.reminderObj = this
  }
  static runReminder() {
    let count = 0
    Reminder.someInterval = setInterval(() => {
      count++
      alert(`${Reminder.message}: ${count}`)
    }, Reminder.interval * 1000)
  }
  static CleanInterval() {
    clearInterval(Reminder.someInterval)
  }
  static changeMessage(message) {
    Reminder.message = message
  }
}

let r = new Reminder(4, `Це нагадування під номером`)
Reminder.runReminder()
setTimeout(() => {
  Reminder.changeMessage(`Це нове нагадування під номером`)
}, 8000)
setTimeout(() => {
  Reminder.CleanInterval()
}, 20000)
