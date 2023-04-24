document.addEventListener("click", function (event) {
  let div = event.target
  while (div.nextElementSibling) {
    div = div.nextElementSibling
    div.style.color = "red"
  }
})
