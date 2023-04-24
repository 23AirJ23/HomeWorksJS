window.onload = function () {
  let form = document.querySelector("form")
  form.addEventListener("click", function (event) {
    if (event.target.tagName === "INPUT") {
      event.target.value = 0
    }
  })
}
