let toDoList = ["Помити посуд", "Витерти пил", "Приготувати їжу", "Відпочити"]
localStorage.clear()
for (const todo of toDoList) {
  localStorage.setItem(todo, todo)
}

function getToDo() {
  if (localStorage.length === 0) {
    return clearInterval(interval)
  }
  let random = Math.floor(Math.random() * localStorage.length)
  let conf = confirm(localStorage.key(random))
  if (conf) {
    localStorage.removeItem(localStorage.key(random))
  }
}

window.onload = function () {
  let interval = setInterval(() => {
    getToDo()
  }, 10000)
}
